import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path, { join } from 'path'

import { targets, setAlias, getPath } from '../../scripts/utils.js'

export default defineConfig({
  resolve: {
    alias: setAlias()
  },
  build: {
    outDir: 'out-lib',
    lib: {
      entry: join(getPath(), './index.ts'),
      name: 'one-ui',
      esModule: true,
      fileName: (format) => `button.${format}.js`
    },
    sourcemap: false,
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })]
})
