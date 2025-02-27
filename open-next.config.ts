import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config = {
  default: {
    minify: true, // This will minify the output
  },
  dangerous: {
    disableTagCache: true,
    disableIncrementalCache: true,
    enableCacheInterception: true,
  },
} satisfies OpenNextConfig;

export default config;
