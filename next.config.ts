import type { NextConfig } from "next";

const basePath = process.env.DEPLOY === "gh-pages" ? "/coherence-theory-website" : "";

const nextConfig: NextConfig = {
  ...(basePath ? { output: "export", basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
