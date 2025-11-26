# Praxis - AI-Native Documentation

[![CI/CD Pipeline](https://github.com/jaleelaaa/Jal-praxis/actions/workflows/render-deploy.yml/badge.svg)](https://github.com/jaleelaaa/Jal-praxis/actions/workflows/render-deploy.yml)
[![Deployment Status](https://img.shields.io/badge/deployment-live-success)](https://jal-praxis.onrender.com)
[![Node.js Version](https://img.shields.io/badge/node-20.x-brightgreen)](https://nodejs.org/)

Core manifestos and doctrines guiding our AI-native approach.

**🌐 Live Site**: [https://jal-praxis.onrender.com](https://jal-praxis.onrender.com)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- Package manager: npm, [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/strategy-coach/www.praxis.netspective.com.git www.praxis.netspective.com
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

## Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment to Render.

### Automated Workflow

Every push to `main` triggers:

1. **Code Quality Checks**
   - ESLint validation
   - TypeScript type checking
   - Code formatting verification

2. **Build Verification**
   - Full production build
   - Build output validation
   - Dependency caching for faster builds

3. **Automatic Deployment**
   - Deploys to Render on successful checks
   - Live at: [https://jal-praxis.onrender.com](https://jal-praxis.onrender.com)

### Pull Request Checks

Pull requests automatically run quality checks and build verification without deploying.

### Manual Deployment

Deployments can also be triggered manually from the Render dashboard.

## Deployment Configuration

- **Platform**: Render (Web Service)
- **Runtime**: Node.js 20
- **Build Command**: `pnpm install && pnpm run build`
- **Start Command**: `pnpm start`
- **Auto-Deploy**: Enabled on push to `main`

## Environment Variables

Required environment variables (configured in Render):

- `NODE_VERSION`: 20
- `NODE_ENV`: production
- `PORT`: 3000 (auto-configured by Render)
