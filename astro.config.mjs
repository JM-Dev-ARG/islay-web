import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(
    {
      compat: true
    }
  )],

  output: "server",
  adapter: netlify(),

});