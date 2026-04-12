# PageWebBio

Site portfolio avec formulaire de contact connecté a un backend Node.js.

## Prerequis

- Node.js 18+
- npm

## Installation

1. Installer les dependances:

```bash
npm install
```

1. Creer le fichier d'environnement:

```bash
copy .env.example .env
```

1. Renseigner les variables SMTP dans `.env` pour un envoi reel.

Si les variables SMTP ne sont pas renseignees, le serveur utilise automatiquement un compte Ethereal de test.

## Configuration Gmail

1. Active la validation en 2 etapes sur ton compte Google.
1. Cree un mot de passe d'application Google (Mail).
1. Copie `.env.example` vers `.env`.
1. Renseigne ces valeurs dans `.env`:

- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER=tonadresse@gmail.com`
- `SMTP_PASS=ton-mot-de-passe-application`
- `CONTACT_TO=tonadresse@gmail.com` (ou une autre adresse de reception)
- `CONTACT_FROM_EMAIL=tonadresse@gmail.com`

Note: avec Gmail, le champ `from` doit generalement correspondre au compte authentifie.

## Lancer le projet

```bash
npm start
```

Puis ouvrir:

<http://localhost:3000>

## API

- `POST /api/contact`
  - Payload JSON attendu:
    - `name` (string, min 2)
    - `email` (email valide)
    - `subject` (string, optionnel)
    - `message` (string, min 10)

- `GET /api/health`
  - Retourne l'etat du serveur.

## Protection anti-spam

- Honeypot sur le formulaire (`website`) pour filtrer les bots basiques.
- Limitation de debit sur `POST /api/contact`:
  - 5 requetes maximum par IP toutes les 15 minutes.

## Deploiement rapide (Render)

1. Pousser le projet sur GitHub.
1. Sur Render, creer un nouveau `Web Service` depuis le repo.
1. Configurer:

- Build Command: `npm install`
- Start Command: `npm start`

1. Ajouter les variables d'environnement:

- `PORT` (facultatif, Render le fournit)
- `CONTACT_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_NAME`
- `CONTACT_FROM_EMAIL`

1. Deployer puis tester `POST /api/contact`.
