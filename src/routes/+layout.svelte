<script lang="ts">
	import '../app.css';
	import 'unfonts.css';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';
	import type { Snippet } from 'svelte';

	import favicon from '$lib/img/favicon.svg';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		new Lenis({
			autoRaf: true
		});
	});
</script>

<UmamiAnalytics
	websiteID="be5b4bf5-415c-45b7-88fe-99ee447cfac0"
	srcURL="https://umami.polp.online/script.js"
	configuration={{
		'data-domains': 'polp.online'
	}}
/>

<svelte:head>
	<!-- preconnect the Umami instance -->
	<link href="https://umami.polp.online" rel="preconnect" />
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<main>
	{@render children?.()}
</main>
