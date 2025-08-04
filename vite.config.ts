import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
      tsconfigPaths(),
    ],
    server: {
      port: 3000,
    },
    define: {
      // Make environment variables available to the server
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
      'process.env.SUPABASE_SERVICE_ROLE_KEY': JSON.stringify(env.SUPABASE_SERVICE_ROLE_KEY),
      'process.env.SESSION_SECRET': JSON.stringify(env.SESSION_SECRET),
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || mode),
    },
    ssr: {
      noExternal: ['react-dom/server'],
    },
  }
})
