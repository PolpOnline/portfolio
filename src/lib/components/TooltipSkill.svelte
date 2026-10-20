<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Tooltip from '#lib/components/ui/tooltip/index.js';
	import { isBrightColor } from '#lib/components/customUtils/color';
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
	let open = $state(false);
	let pointerType = '';
	let wasOpenOnPointerDown = false;

	$effect(() => {
		if (!tooltipContentRef) {
			return;
		}

		tooltipContentRef.style.setProperty('--tech-color', color);
	});

	function handlePointerDown(event: PointerEvent) {
		pointerType = event.pointerType;
		// Capture the state before focus/pointer handlers can change it, so a tap toggles
		// relative to what the user actually saw when they touched the trigger.
		wasOpenOnPointerDown = open;
	}

	function handleClick() {
		// Hover handles mouse pointers; touch and pen taps toggle instead.
		if (pointerType === 'mouse') {
			return;
		}

		open = !wasOpenOnPointerDown;
	}
</script>

<!-- `data-tilt` mirrors the open state so touch devices get the same icon tilt as hover. -->
<Tooltip.Root bind:open disableCloseOnTriggerClick>
	<Tooltip.Trigger
		aria-label={name}
		tabindex={-1}
		data-tilt={open ? 'true' : undefined}
		onpointerdown={handlePointerDown}
		onclick={handleClick}
	>
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
