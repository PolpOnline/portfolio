<script lang="ts">
	import '../app.pcss';
	import 'unfonts.css';

	import favicon from '$lib/img/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<main>
	<slot></slot>
</main>
