import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://jazzy-naiad-762a14.netlify.app/",
  integrations: [preact()]
});