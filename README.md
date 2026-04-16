# GitHub Actions Lunch & Learn

Demo repository showcasing GitHub Actions workflows.

## What's Inside

### React App (Vite)
A Hello World React app built with Vite — demonstrates a real build step in CI.

### Workflows

| Workflow | File | Trigger | What it does |
|----------|------|---------|--------------|
| **Build & Deploy to S3** | `.github/workflows/deploy.yml` | Push to `main` / manual | Installs deps, builds the React app, syncs `dist/` to an S3 bucket |
| **Create Release** | `.github/workflows/release.yml` | Push a `v*` tag | Creates a GitHub Release with auto-generated notes |

## Quick Start

### 1. Set up repo secrets & variables

Go to **Settings > Secrets and variables > Actions** and add:

| Type | Name | Value |
|------|------|-------|
| **Secret** | `AWS_ACCESS_KEY_ID` | Your IAM access key |
| **Secret** | `AWS_SECRET_ACCESS_KEY` | Your IAM secret key |
| **Variable** | `AWS_S3_BUCKET` | S3 bucket name (e.g. `my-demo-bucket`) |
| **Variable** | `AWS_REGION` | AWS region (e.g. `us-east-1`) |

### 2. Deploy

Push to `main` — the workflow will build the React app and sync the output to S3.

### 3. Create a release

```bash
git tag v1.0.0
git push origin v1.0.0
```

A release will appear under the **Releases** tab with auto-generated notes.

## Local Development

```bash
npm install
npm run dev
```
