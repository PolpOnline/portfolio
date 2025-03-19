<script lang="ts">
	import MdiGithub from '~icons/mdi/github';
	import MdiLinkVariant from '~icons/mdi/link-variant';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

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
</script>

<div class="flex w-full flex-col items-center justify-center">
	<enhanced:img
		src={thumbnail}
		alt={`${title} thumbnail`}
		class="mx-auto mb-4 h-full w-1/2 rounded-2xl"
	/>

	<h1 class="mt-4 mb-4 text-[3rem] font-semibold tracking-wider">{title}</h1>
	<p class="mb-4 text-center text-lg">{description}</p>
	<div class="mb-4 flex flex-wrap justify-center gap-2">
		{#each technologies as technology}
			<Badge class="text-lg" variant="outline">
				{technology}
			</Badge>
		{/each}
	</div>

	<div class="mb-4 flex gap-4">
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
