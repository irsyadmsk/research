import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://research.irsyads.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
