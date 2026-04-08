import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
