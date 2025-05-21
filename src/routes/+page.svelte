<script lang="ts">
	import { PolpOnlineLogo } from '$lib/img';
	import SkillSet from '$lib/components/SkillSet.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
	import SocialButtons from '$lib/components/SocialButtons.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<div class="flex h-svh flex-col items-center justify-center">
	<PolpOnlineLogo class="mb-4 size-52 rounded-full" />

	<h1 class="mt-4 mb-8 text-5xl">PolpOnline</h1>

	<div class="mb-4">
		<SocialButtons />
	</div>

	<div class="mb-20 text-center text-2xl text-blue-500">
		<a href="mailto:me@polp.online"> me@polp.online </a>
	</div>

	<div class="absolute bottom-20 flex flex-col justify-end justify-self-center">
		<Scroller />
	</div>
</div>

<h2 class="my-5 text-center text-4xl font-bold">My Skills</h2>

<SkillSet />

<h2 class="mt-20 mb-4 text-center text-4xl font-bold">My Projects</h2>

<Projects />

<div class="mb-10"></div>
