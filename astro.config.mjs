import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://heatpumpwise.example",
  trailingSlash: "always",
  build: { format: "directory" },
  compressHTML: true,
  prefetch: { preconnect: true },
});