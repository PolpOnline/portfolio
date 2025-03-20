<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { isBrightColor } from '$lib/components/customUtils/color';

	const {
		name,
		color,
		children
	}: {
		name: string;
		color: string;
		children: any;
	} = $props();
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{@render children()}
	</Tooltip.Trigger>
	<Tooltip.Content
		--tech-color={color}
		class="border-(--tech-color) bg-(--tech-color) {isBrightColor(color) ? 'text-secondary' : ''}"
	>
		{name}
	</Tooltip.Content>
</Tooltip.Root>
