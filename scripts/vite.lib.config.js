import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path, { join } from 'path';

import { targets, setAlias, getPath } from './utils.js';

const input = {};
const output = [];

targets.forEach((target) => {
  input[target] = `packages/${target}/index.ts`;
  const obj = {
    dir: 'out-lib',
    format: 'es',
    name: target,
    entryFileNames: '[name].js',
    exports: 'named',
  };
  output.push(obj);
});

const entry = targets.map((e) => {
  return { [`${e}`]: `packages/${e}/index.ts` };
});

export default defineConfig({
  resolve: {
    alias: setAlias(),
  },
  optimizeDeps: {
    exclude: ['@one-ui/one-utils'],
  },
  build: {
    outDir: 'out-lib',
    assetsDir: 'public',
    rollupOptions: {
      input,
      output,
      // external: ['one-button']
    },
    // lib: {
    //   entry: join(getPath(), '../packages/index.ts'),
    //   name: 'one-ui',
    //   esModule: true,
    //   fileName: (format) => `${format}.js`
    // },
    sourcemap: false,
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
