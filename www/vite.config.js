import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the absolute path of the current directory (www)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    fs: {
      allow: [
        __dirname,                   // 1. Allow the current 'www' directory (for index.html, main.js)
        path.resolve(__dirname, "C:\\Users\\PARSNOVIN\\wasm-game-of-life\\pkg"), // 2. Allow the parent directory (for the 'pkg' folder)
      ],
    },
  },
});