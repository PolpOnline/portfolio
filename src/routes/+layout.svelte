<script lang="ts">
	import '../app.css';
	import 'unfonts.css';

	import favicon from '$lib/img/favicon.svg';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>PolpOnline</title>
</svelte:head>

<main>
	{@render children?.()}
</main>
