import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@' 별칭을 프로젝트의 루트 디렉토리로 설정합니다.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
