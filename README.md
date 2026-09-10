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