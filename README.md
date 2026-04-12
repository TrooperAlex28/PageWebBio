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

Important: le fichier `.env.example` doit rester en valeurs fictives uniquement. Les vraies valeurs vont dans les variables d'environnement Netlify, jamais dans le repo.

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

## Deploiement rapide (Netlify)

1. Pousser le projet sur GitHub.
1. Créer un nouveau site Netlify depuis le dépôt.
1. Garder le dossier racine du projet comme base de publication.
1. Vérifier que `netlify.toml` est présent à la racine.
1. Ajouter les variables d'environnement dans Netlify > Site settings > Environment variables:

- `CONTACT_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_NAME`
- `CONTACT_FROM_EMAIL`

1. Déployer le site.
1. Tester le formulaire: il appelle maintenant `POST /api/contact`, réécrit vers la Netlify Function.

## Fonctionnement Netlify

- Le front reste statique.
- `POST /api/contact` est redirigé vers `/.netlify/functions/contact`.
- `GET /api/health` est redirigé vers `/.netlify/functions/health`.
- En local, `npm start` continue de lancer le serveur Express pour les tests hors Netlify.
