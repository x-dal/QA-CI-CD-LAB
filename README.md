# QA CI/CD Lab

[![CI](https://github.com/x-dal/QA-CI-CD-LAB/actions/workflows/ci.yml/badge.svg)](https://github.com/x-dal/QA-CI-CD-LAB/actions/workflows/ci.yml)

## What this project demonstrates

This project shows a basic QA-focused CI pipeline.

The pipeline runs automatically on every push and pull request to `main`.

## CI pipeline steps

1. Checkout code
2. Setup Node.js
3. Install dependencies using `npm ci`
4. Run lint checks
5. Run unit tests
6. Run API tests
7. Run production build
8. Run Playwright E2E tests
9. Upload Playwright HTML report as artifact

## Test types

### Unit tests

Unit tests are written with Vitest.

### API tests

API tests validate the `/api/health` endpoint.

### E2E tests

End-to-end tests are written with Playwright and run against the local Next.js app.

## Why this matters

This project demonstrates how automated quality gates can help detect issues before code is merged or deployed.

## Git workflow used in this project

This project follows a simple pull request workflow:

1. Create a new branch from `main`
2. Make changes on the branch
3. Push the branch to GitHub
4. Open a pull request into `main`
5. GitHub Actions runs CI checks
6. Merge only when checks pass
7. Firebase App Hosting deploys from `main`

## Common commands

Create a new branch:

```bash
git checkout main
git pull origin main
git checkout -b my-feature-branch