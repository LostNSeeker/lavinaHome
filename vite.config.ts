import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'cors-image-proxy',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/proxy/image')) {
            try {
              const urlObj = new URL(req.url, 'http://localhost');
              const targetUrl = urlObj.searchParams.get('url');
              if (!targetUrl) {
                res.statusCode = 400;
                res.end('Missing url');
                return;
              }
              const fetchRes = await fetch(targetUrl);
              if (!fetchRes.ok) {
                res.statusCode = fetchRes.status;
                res.end(`Proxy failed: ${fetchRes.statusText}`);
                return;
              }
              const contentType = fetchRes.headers.get('content-type') || 'image/jpeg';
              const buffer = await fetchRes.arrayBuffer();
              res.setHeader('Content-Type', contentType);
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
              res.setHeader('Cache-Control', 'public, max-age=86400');
              res.end(Buffer.from(buffer));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(err?.message || 'Image proxy error');
            }
            return;
          }
          next();
        });
      }
    }
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

