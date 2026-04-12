const nodemailer = require("nodemailer");

let cachedTransporterPromise;

function validatePayload(body) {
  const website = String(body.website || "").trim();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

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

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: JSON.stringify({ success: false, error: "Method not allowed." }),
    };
  }

  let body = {};
  try {
    body = event.body ? JSON.parse(event.body) : {};
  } catch (_error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Corps JSON invalide." }),
    };
  }

  const result = validatePayload(body);
  if (!result.ok) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: result.error }),
    };
  }

  try {
    const { transporter, targetEmail, mode } = await getTransporter();
    const payload = result.value;
    const fromName = process.env.CONTACT_FROM_NAME || "WebBio Contact";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || payload.email;

    const info = await transporter.sendMail({
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

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        mode,
        previewUrl: previewUrl || null,
      }),
    };
  } catch (error) {
    console.error("Erreur envoi contact:", error);

    const isAuthError =
      error &&
      (error.responseCode === 535 ||
        /BadCredentials|Invalid login/i.test(String(error.message || "")));
    const clientError = isAuthError
      ? "Configuration Gmail invalide. Verifiez SMTP_USER et surtout SMTP_PASS (mot de passe d'application Google)."
      : "Impossible d'envoyer le message pour le moment.";

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: clientError }),
    };
  }
};
