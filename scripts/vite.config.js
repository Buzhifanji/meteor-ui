import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path, { resolve, dirname } from 'path'
import { setAlias } from './utils.js'
import { fileURLToPath } from 'url';

const getPath = (() => {
  let x = dirname(decodeURI(new URL(import.meta.url).pathname));
  return path.resolve((process.platform == "win32") ? x.substr(1) : x);
});

export default defineConfig({
  resolve: {
    alias: setAlias()
  },
  build: {
    lib: {
      entry: 'website/main.ts',
    }
  },
  plugins: [
    svelte({
      exclude: 'website/App.svelte',
      compilerOptions: {
        customElement: true,
      },
      preprocess: [sveltePreprocess({ typescript: true })]
    }),
    svelte({
      include: 'website/App.svelte',
    }),
  ],
});
