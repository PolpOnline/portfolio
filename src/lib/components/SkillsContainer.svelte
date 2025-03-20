<script lang="ts">
	const {
		title,
		children
	}: {
		title: string;
		children: any;
	} = $props();
</script>

<div>
	<h3 class="my-8 font-medium">{title}</h3>

	<div
		class="skills-container flex w-full flex-wrap justify-center
		gap-4 px-14 text-6xl [&>*]:cursor-default [&>*]:transition-all
		[&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110
		[&>*]:hover:rotate-10"
	>
		{@render children()}
	</div>
</div>
