# Docker Hub CI/CD (frontend)

Production runs from **`docker-compose.yml`** in the [habit-tracker-springboot](https://github.com/crraay/habit-tracker-springboot) repo on the droplet. This repo builds and pushes the **frontend image only**.

## Workflows

| Workflow | Trigger | Action |
|----------|---------|--------|
| **`build-image`** | Push to `main`, manual | `npm ci` → `npm run test:ci` → `docker build` → push **`docker.io/crraay/habit-tracker-angular:latest`** |
| **`deploy-image-digital-ocean`** | After **`build-image`** succeeds on `main`, manual | SSH → `git pull` in backend clone → `docker compose pull/up frontend` |

Deploy uses **`DEPLOY_BACKEND_DIR`** (default `/app/habit-tracker-springboot`) — the path to the **backend** repo on the server where compose and `.env` live.

## Secrets (this repo)

| Secret | Purpose |
|--------|--------|
| `DOCKER_HUB_USERNAME` | Hub login (push) |
| `DOCKER_HUB_TOKEN` | Hub token (push) |
| `SERVER_HOST` | Droplet SSH |
| `SERVER_USER` | SSH user (in `docker` group) |
| `SERVER_PASSWORD` | SSH password |

Optional **variables:** `DEPLOY_BACKEND_DIR`, `SERVER_SSH_PORT`, `DEPLOY_SSH_COMMAND_TIMEOUT` — same as backend repo.

Full server setup, Postgres volume safety, and Docker install: see **habit-tracker-springboot/DOCKER.md**.

## Local image

```bash
docker build -t docker.io/crraay/habit-tracker-angular:latest .
```

Run the full stack from the backend repo with `docker compose up -d` after pulling both Hub images.
