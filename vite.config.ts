import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"$content": path.resolve('./src/lib/content'),

			"$directory": path.resolve('./src/lib/site-components/directory'),
			"$directory-ui": path.resolve('./src/lib/site-components/directory/ui'),

			"$music-compilation": path.resolve('./src/lib/site-components/music-compilation'),
			"$music-compilation-ui": path.resolve('./src/lib/site-components/music-compilation/ui'),

			"$book": path.resolve('./src/lib/site-components/book'),
			"$book-ui": path.resolve('./src/lib/site-components/book'),

			"$common": path.resolve('./src/lib/global/common'),

			"$theme": path.resolve('./src/lib/global/ui/theme'),

			"$header": path.resolve('./src/lib/global/ui/header'),

			"$store": path.resolve('./src/lib/global/store'),
			
			"$ui-utils": path.resolve('./src/lib/global/ui/utils'),
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
});
