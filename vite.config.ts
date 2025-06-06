import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import Icons from 'unplugin-icons/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			// experimental
			autoInstall: true
		}),
		Unfonts({
			custom: {
				/**
				 * Fonts families lists
				 */
				families: [
					{
						/**
						 * Name of the font family.
						 */
						name: 'Cascadia Code Regular',
						/**
						 * Local name of the font. Used to add `src: local()` to `@font-rule`.
						 */
						local: 'Cascadia Code Regular',
						/**
						 * Regex(es) of font files to import. The names of the files will
						 * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
						 */
						src: './src/lib/fonts/CascadiaCode.woff2'
					}
				],

				/**
				 * Defines the default `font-display` value used for the generated
				 * `@font-rule` classes.
				 */
				display: 'swap',

				/**
				 * Using `<link rel="preload">` will trigger a request for the WebFont
				 * early in the critical rendering path, without having to wait for the
				 * CSSOM to be created.
				 */
				preload: true,

				/**
				 * Using `<link rel="prefetch">` is intended for prefetching resources
				 * that will be used in the next navigation/page load
				 * (e.g. when you go to the next page)
				 *
				 * Note: this can not be used with `preload`
				 */
				prefetch: false,

				/**
				 * define where the font load tags should be inserted
				 * default: 'head-prepend'
				 *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
				 */
				injectTo: 'head-prepend'
			}
		})
	]
});
