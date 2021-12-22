import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: false,
      title: 'Studio Alex - OUI Bundle Visualizer'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/oui.esm.ts'),
      name: 'oui'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
