import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Gera robots.txt e sitemap.xml no build, usando o domínio definido em VITE_SITE_URL.
function seoFiles(siteUrl) {
  const base = siteUrl.replace(/\/+$/, '')
  return {
    name: 'seo-files',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n    <loc>${base}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n` +
          `</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://www.seudominio.com.br'

  return {
    plugins: [react(), seoFiles(siteUrl)],
    build: {
      target: 'es2020',
      sourcemap: false,
      assetsInlineLimit: 0,
    },
  }
})
