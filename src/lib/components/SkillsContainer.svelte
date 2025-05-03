<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		title,
		children
	}: {
		title: string;
		children: Snippet;
	} = $props();
</script>

<div>
	<h3 class="my-8 font-medium">{title}</h3>

	<div
		class="flex w-full flex-wrap justify-center
		gap-4 px-8 text-6xl 2xl:px-14 [&>button]:cursor-default [&>button]:transition-all
		[&>button]:duration-300 [&>button]:ease-in-out [&>button]:hover:scale-110
		[&>button:nth-of-type(even)]:hover:-rotate-10 [&>button:nth-of-type(odd)]:hover:rotate-10"
	>
		{@render children()}
	</div>
</div>
