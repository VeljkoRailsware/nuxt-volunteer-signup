import {fileURLToPath} from 'node:url';
export default defineNuxtConfig({compatibilityDate:'2026-10-01',devtools:{enabled:false},nitro:{preset:'node-server',externals:{inline:[fileURLToPath(new URL('./src/core/',import.meta.url))],external:['node:sqlite']}},devServer:{port:3000},typescript:{strict:false}});
