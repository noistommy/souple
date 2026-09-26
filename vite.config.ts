import { defineConfig, type UserConfig, type LibraryFormats } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


const reactExternal = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  /^react\//,
  /^react-dom\//,
]


const commonConfig = {
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  plugins: [react(), svgr()],
}

const libFormats: LibraryFormats[] = ['es', 'umd', 'cjs']

const libConfig: UserConfig = {
  ...commonConfig,
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Souple',
      formats: libFormats,
      fileName: (format) => {
        switch(format) {
          case 'es': return 'souple.js'
          case 'umd': return 'souple.umd.js'
          case 'cjs': return 'souple.cjs'
          default: return `souple.${format}.js`
        }
      }
    },
    rollupOptions: {
      external: reactExternal,
      output: {
        globals: {
          react: "React",
          'react-dom': 'ReactDom'
        },
        // Use `index.css` for css
        assetFileNames: () => {
          return "souple.css"
        }
      }
    }
  }
}

const demoConfig: UserConfig = {
  ...commonConfig,
  root: "./demo",
  base: process.env.NODE_ENV === 'production' ? '/souple/' : '/',
  server: {
    port: 5912
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const executionMode = mode || "lib";
  process.env.NODE_ENV = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return demoConfig
  } else {
    return libConfig
  }
})
