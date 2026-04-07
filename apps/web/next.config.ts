import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@workspace-wellbeing/auth",
    "@workspace-wellbeing/modules",
    "@workspace-wellbeing/platform",
    "@workspace-wellbeing/tailwind-config",
    "@workspace-wellbeing/ui",
  ],
};

export default nextConfig;
