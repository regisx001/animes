import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
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