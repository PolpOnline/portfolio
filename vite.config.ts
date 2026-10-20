import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			preprocess: vitePreprocess(),
			inspector: {
				toggleKeyCombo: 'meta-shift',
				showToggleButton: 'always',
				toggleButtonPos: 'bottom-right'
			},
			adapter: adapter(),
			compilerOptions: {
				compatibility: {
					componentApi: 4
				}
			}
		}),
		Icons({
			compiler: 'svelte', // experimental
			autoInstall: true
		}),
		devtoolsJson()
	]
});
