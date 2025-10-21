<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { isBrightColor } from '$lib/components/customUtils/color';
	import type { Snippet } from 'svelte';

	const {
		name,
		color,
		children
	}: {
		name: string;
		color: string;
		children: Snippet;
	} = $props();

	let tooltipContentRef: HTMLElement | null | undefined = $state(null);

	$effect(() => {
		if (!tooltipContentRef) {
			return;
		}

		tooltipContentRef.style.setProperty('--tech-color', color);
	});
</script>

<Tooltip.Root>
	<Tooltip.Trigger aria-label={name} tabindex={-1}>
		{@render children()}
	</Tooltip.Trigger>
	<Tooltip.Content
		class="border-(--tech-color) bg-(--tech-color) {!isBrightColor(color) ? 'text-primary' : ''}"
		arrowClasses="border-(--tech-color) bg-(--tech-color)"
		bind:ref={tooltipContentRef}
	>
		{name}
	</Tooltip.Content>
</Tooltip.Root>
