import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	vitePlugin: {
		inspector: true,   
	},
	kit: {
		adapter: adapter(),
		alias:{
			"@api":"src/lib/api"
		}
	},	
};
export default config;