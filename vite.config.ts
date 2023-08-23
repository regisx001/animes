import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from "path"


export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
	, resolve: {
		alias: {
			// '@config': path.resolve(__dirname, './src/config.ts'),
			'@components': path.resolve(__dirname, './src/lib/Components/index.ts'),
			// '@languages': path.resolve(__dirname, './src/lib/languages/index.ts'),
			// '@lib': path.resolve(__dirname, './src/lib'),
			// '@stores': path.resolve(__dirname, './src/lib/stores'),
			// '@styles': path.resolve(__dirname, './src/lib/styles'),
		},
	},
});
