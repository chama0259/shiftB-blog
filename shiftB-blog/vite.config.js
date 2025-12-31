import { defineConfig } from 'vite'
//ファストリフレッシュ対応
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
//↑「JSXはReactとして解釈してね」,「tailwindも解釈してね」