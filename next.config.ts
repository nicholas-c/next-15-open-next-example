import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    domains: [
      // {
      //   domain: "next-15-en.nich-carter-qza3ng.gymshark-sandbox.tools",
      //   defaultLocale: "en",
      // },
      // {
      //   domain: "next-15-es.nich-carter-qza3ng.gymshark-sandbox.tools",
      //   defaultLocale: "es",
      // },
      {
        domain: "gymshark.local",
        defaultLocale: "en",
      },
      {
        domain: "es.gymshark.local",
        defaultLocale: "es",
      },
    ],
  },
};

export default nextConfig;
