/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  // Static export: every page prerenders to plain HTML in out/, so the
  // site deploys to any static host (Vercel "Other" preset included).
  output: 'export',
}

export default nextConfig
