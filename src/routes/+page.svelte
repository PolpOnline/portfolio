<script lang="ts">
	import { PolpOnlineLogo } from '$lib/img';
	import SkillSet from '$lib/components/SkillSet.svelte';
	import Scroller from '$lib/components/Scroller.svelte';
	import SocialButtons from '$lib/components/SocialButtons.svelte';
</script>

<div class="flex h-svh flex-col items-center justify-center">
	<PolpOnlineLogo class="mb-4 h-[200px] w-[200px] rounded-full" />

	<h1 class="mt-4 mb-4 text-[3rem]">PolpOnline</h1>

	<div class="mb-20">
		<SocialButtons />
	</div>

	<div class="absolute bottom-20 flex flex-col justify-end justify-self-center">
		<Scroller />
	</div>
</div>

<h2 class="mb-5 text-center text-4xl font-bold">My skills</h2>

<SkillSet />

<h2 class="mb-5 text-center text-4xl font-bold">My projects</h2>
