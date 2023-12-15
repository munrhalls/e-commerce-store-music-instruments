import { defineConfig } from 'vite'
import { transformHtmlPlugin } from 'vite-plugin-transform-html'

export default defineConfig({
  plugins: [transformHtmlPlugin()]
})
