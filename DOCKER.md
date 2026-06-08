# Docker / production deploy

Production stack (Compose, `.env`, DigitalOcean deploy) lives in **[habit-tracker-compose](https://github.com/crraay/habit-tracker-compose)**.

This repo only builds and pushes the frontend image:

- Workflow **`build-image`** → `npm ci` → `test:ci` → `docker.io/crraay/habit-tracker-angular:latest`
- Deploy: run **`deploy-image-digital-ocean`** in the compose repo (manual)

Local frontend-only Docker build: `docker build -t docker.io/crraay/habit-tracker-angular:latest .`
