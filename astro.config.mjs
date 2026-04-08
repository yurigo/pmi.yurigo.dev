import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkGithubAlerts from "remark-github-alerts";

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkGithubAlerts],
    shikiConfig: {
      themes: {
        light: "github-light",
        // dark: "synthwave-84",
        dark: "github-dark",
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
