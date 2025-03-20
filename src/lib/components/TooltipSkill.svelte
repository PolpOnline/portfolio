<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	const {
		name,
		children
	}: {
		name: string;
		children: any;
	} = $props();
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{@render children()}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{name}</p>
	</Tooltip.Content>
</Tooltip.Root>
