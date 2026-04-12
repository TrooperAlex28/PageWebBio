require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Needed behind proxies (Render, Railway, etc.) for correct IP and rate limit behavior.
app.set("trust proxy", 1);

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Trop de tentatives. Reessayez dans 15 minutes.",
  },
});

let cachedTransporterPromise;

async function getTransporter() {
  if (cachedTransporterPromise) {
    return cachedTransporterPromise;
  }

  cachedTransporterPromise = (async function createTransporter() {
    const hasSmtpConfig =
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    if (hasSmtpConfig) {
      return {
        transporter: nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        }),
        targetEmail: process.env.CONTACT_TO || process.env.SMTP_USER,
        mode: "smtp",
      };
    }

    // Fallback dev: compte Ethereal automatique pour tester sans config SMTP réelle.
    const testAccount = await nodemailer.createTestAccount();
    return {
      transporter: nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      targetEmail: process.env.CONTACT_TO || testAccount.user,
      mode: "ethereal",
    };
  })();

  return cachedTransporterPromise;
}

function validatePayload(body) {
  const website = String(body.website || "").trim();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // Honeypot anti-spam: ce champ doit rester vide.
  if (website.length > 0) {
    return { ok: false, error: "Requete invalide." };
  }

  if (name.length < 2) {
    return { ok: false, error: "Nom invalide." };
  }
  if (!emailRegex.test(email)) {
    return { ok: false, error: "Email invalide." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Message trop court." };
  }

  return { ok: true, value: { name, email, subject, message } };
}

app.post("/api/contact", contactLimiter, async function (req, res) {
  const result = validatePayload(req.body);
  if (!result.ok) {
    return res.status(400).json({ success: false, error: result.error });
  }

  try {
    const { transporter, targetEmail, mode } = await getTransporter();
    const payload = result.value;
    const fromName = process.env.CONTACT_FROM_NAME || "WebBio Contact";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || payload.email;

    const info = await transporter.sendMail({
      // Gmail peut refuser les messages si "from" n'est pas l'adresse authentifiee.
      from: `"${fromName}" <${senderEmail}>`,
      to: targetEmail,
      replyTo: payload.email,
      subject: payload.subject || `Nouveau message de ${payload.name}`,
      text:
        `Nom: ${payload.name}\n` +
        `Email: ${payload.email}\n` +
        `Sujet: ${payload.subject || "(aucun)"}\n\n` +
        `Message:\n${payload.message}\n`,
      html:
        `<p><strong>Nom:</strong> ${payload.name}</p>` +
        `<p><strong>Email:</strong> ${payload.email}</p>` +
        `<p><strong>Sujet:</strong> ${payload.subject || "(aucun)"}</p>` +
        `<p><strong>Message:</strong></p><p>${payload.message.replace(/\n/g, "<br>")}</p>`,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log("Apercu email (Ethereal):", previewUrl);
    }

    console.log("Contact envoye:", {
      mode,
      to: targetEmail,
      from: senderEmail,
      messageId: info.messageId,
      contactEmail: payload.email,
    });

    return res.status(200).json({
      success: true,
      mode,
      previewUrl: previewUrl || null,
    });
  } catch (error) {
    console.error("Erreur envoi contact:", error);

    const isAuthError =
      error &&
      (error.responseCode === 535 ||
        /BadCredentials|Invalid login/i.test(String(error.message || "")));
    const clientError = isAuthError
      ? "Configuration Gmail invalide. Verifiez SMTP_USER et surtout SMTP_PASS (mot de passe d'application Google)."
      : "Impossible d'envoyer le message pour le moment.";

    return res.status(500).json({
      success: false,
      error: clientError,
    });
  }
});

app.get("/api/health", function (_req, res) {
  res.json({ ok: true });
});

app.get("*", function (_req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log(`Serveur demarre: http://localhost:${PORT}`);
});
