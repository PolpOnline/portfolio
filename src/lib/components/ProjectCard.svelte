<script lang="ts">
	import MdiGithub from '~icons/mdi/github';
	import MdiLinkVariant from '~icons/mdi/link-variant';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { getTechColor } from '$lib/components/techMap';

	const {
		title,
		description,
		technologies,
		githubLink,
		demoLink,
		thumbnail,
		backdropColor
	}: {
		title: string;
		description: string;
		technologies: string[];
		githubLink: string;
		demoLink?: string;
		thumbnail: any;
		backdropColor: string;
	} = $props();
</script>

<div class="w-full">
	<div class="flex w-full flex-col items-center justify-center">
		<!-- DO NOT REMOVE THE DIV BELOW -->
		<div>
			<div class="mx-auto w-8/10 max-w-5xl justify-self-center py-10">
				<enhanced:img
					src={thumbnail}
					alt={`${title} thumbnail`}
					class="project-img rounded-2xl"
					style="--backdrop-color: {backdropColor}"
				/>
			</div>
		</div>

		<h1 class="mb-6 px-5 text-center text-5xl font-semibold tracking-wider">{title}</h1>
		<p class="mb-6 px-5 text-center text-lg">{description}</p>
		<div class="mb-6 flex flex-wrap justify-center gap-4">
			{#each technologies as technology}
				{@const color = getTechColor(technology)}
				<Badge
					class="custom-tech-badge bg-background cursor-default text-lg select-none"
					variant="outline"
					style="--color: {color || 'initial'}; --backdrop-color: {color || '#FFFFFF'}"
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
					View live site
				</Button>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.custom-tech-badge) {
		border-color: var(--color);
		color: var(--color);
		transition: filter 0.2s ease-in-out;
	}

	:global(.custom-tech-badge:hover) {
		filter: drop-shadow(0 0 0.5rem var(--backdrop-color));
	}

	.project-img {
		filter: drop-shadow(0 0 1.5rem var(--backdrop-color));
	}
</style>
