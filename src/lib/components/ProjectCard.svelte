<script lang="ts">
	import MdiGithub from '~icons/mdi/github';
	import MdiLinkVariant from '~icons/mdi/link-variant';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import Lens from '$lib/components/aceternity/Lens.svelte';
	import { getTechColor } from '$lib/components/techMap';

	const {
		title,
		description,
		technologies,
		githubLink,
		demoLink,
		thumbnail
	}: {
		title: string;
		description: string;
		technologies: string[];
		githubLink: string;
		demoLink?: string;
		thumbnail: any;
	} = $props();

	let hovering = $state(false);
</script>

<div class="w-full">
	<div class="flex w-full flex-col items-center justify-center">
		<Lens bind:hovering lensSize={400} zoomFactor={2}>
			<enhanced:img
				src={thumbnail}
				alt={`${title} thumbnail`}
				class="mx-auto mb-4 h-full w-[95%] max-w-[800px] rounded-2xl"
			/>
		</Lens>

		<h1 class="my-6 text-center text-[3rem] font-semibold tracking-wider">{title}</h1>
		<p class="mb-6 text-center text-lg">{description}</p>
		<div class="mb-6 flex flex-wrap justify-center gap-2">
			{#each technologies as technology}
				<Badge
					class="custom-tech-badge text-lg"
					variant="outline"
					style="--color: {getTechColor(technology)}"
				>
					{technology}
				</Badge>
			{/each}
		</div>

		<div class="mb-6 flex gap-4">
			<Button href={githubLink} target="_blank" variant="secondary">
				<MdiGithub class="h-6 w-6" />
				View on GitHub
			</Button>

			{#if demoLink}
				<Button href={demoLink} target="_blank" variant="secondary">
					<MdiLinkVariant class="h-6 w-6" />
					View demo
				</Button>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.custom-tech-badge) {
		border-color: var(--color);
		color: var(--color);
	}
</style>
