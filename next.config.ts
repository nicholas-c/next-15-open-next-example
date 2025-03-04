import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/account/register",
        destination: "/api/auth?tab=register",
      },
      {
        source: "/account/login",
        destination: "/api/auth",
      },
    ];
  },
  i18n: {
    locales: ["fr", "en", "es"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "next-15-en.nich-carter-qza3ng.gymshark-sandbox.tools",
        defaultLocale: "en",
        locales: ["fr"],
      },
      {
        domain: "next-15-es.nich-carter-qza3ng.gymshark-sandbox.tools",
        defaultLocale: "es",
      },
    ],
  },
};

export default nextConfig;
