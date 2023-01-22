import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [react(), mkcert()]
})

// para que funcione hay que habilitar habilitar el localhost inseguro del navegador chrome:
//1 Launch 'chrome://flags/#temporary-unexpire-flags-m87' from address bar.
//2 Set to Enabled.
//3 Restart Chrome.
//4 Launch 'chrome://flags/#allow-insecure-localhost'
//5 It will be visible now, so simply enable it.
//6 Restart Chrome again.

// export default defineConfig({
//   plugins: [react() ],
//   server: {
//     host: 'localhost',
//     port: 3000,
//     https: true
//   }
// })
