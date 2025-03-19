<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Carousel from '$lib/components/ui/carousel';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ForumImg from '$lib/img/screenshots/forum_meucci.png?enhanced';
	import MonitorImg from '$lib/img/screenshots/monitor.png?enhanced';
	import ShortenerImg from '$lib/img/screenshots/loco_link_shortener.png?enhanced';
	import GPUUsageWaybarImg from '$lib/img/screenshots/gpu_usage_waybar.png?enhanced';
</script>

<div class="mx-auto my-3 md:w-[80%] xl:w-[90%]">
	<Carousel.Root>
		<Carousel.Content>
			<Carousel.Item>
				<ProjectCard
					title="Forum Meucci"
					description="A site I built for my school, where students can subscribe to courses and get information about them.
											Uses the school's Google OAuth"
					technologies={['SvelteKit', 'Rust', 'Axum', 'SQLx', 'PostgreSQL']}
					githubLink="https://github.com/PolpOnline/forum-meucci"
					thumbnail={ForumImg}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<ProjectCard
					title="Monitor"
					description="A site I built to monitor servers and routers via a simple heartbeat crontab job"
					technologies={['SvelteKit', 'Rust', 'Axum', 'SQLx', 'PostgreSQL']}
					githubLink="https://github.com/PolpOnline/monitor"
					demoLink="https://monitor.polp.online"
					thumbnail={MonitorImg}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<ProjectCard
					title="Loco Link Shortener"
					description="A simple link shortener built as a final project for my third year of highschool"
					technologies={['SvelteKit', 'Rust', 'Loco', 'Axum', 'SeaORM', 'PostgreSQL']}
					githubLink="https://github.com/PolpOnline/loco-link-shortener"
					demoLink="https://short.polp.online"
					thumbnail={ShortenerImg}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<ProjectCard
					title="GPU Usage Waybar"
					description="A simple tool to display GPU usage on Waybar (Wayland status bar)"
					technologies={['Rust']}
					githubLink="https://github.com/PolpOnline/gpu-usage-waybar"
					thumbnail={GPUUsageWaybarImg}
				/>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous variant="outline" class="not-md:hidden" />
		<Carousel.Next variant="outline" class="not-md:hidden" />
	</Carousel.Root>
</div>
