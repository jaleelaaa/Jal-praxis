import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Configure for Render deployment
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);

