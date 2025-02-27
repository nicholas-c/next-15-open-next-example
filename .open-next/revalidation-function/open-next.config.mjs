import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);import bannerUrl from 'url';const __dirname = bannerUrl.fileURLToPath(new URL('.', import.meta.url));

// open-next.config.ts
var config = {
  default: {
    minify: true
    // This will minify the output
  },
  dangerous: {
    disableTagCache: true,
    disableIncrementalCache: true,
    enableCacheInterception: true
  }
};
var open_next_config_default = config;
export {
  open_next_config_default as default
};
