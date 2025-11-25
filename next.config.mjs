import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Optimize for production deployment
  output: 'standalone', // Creates a minimal deployment package
  // Configure for Render deployment
  images: {
    unoptimized: true, // Since we're deploying as static/standalone
  },
};

export default withMDX(config);

