<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ForumImg from '$lib/img/screenshots/forum_meucci.png?enhanced';
	import MonitorImg from '$lib/img/screenshots/monitor.png?enhanced';
	import ShortenerImg from '$lib/img/screenshots/loco_link_shortener.png?enhanced';
	import GPUUsageWaybarImg from '$lib/img/screenshots/gpu_usage_waybar.png?enhanced';
</script>

<div class="mx-auto my-3 md:w-8/10 xl:w-9/10">
	<Carousel.Root
		plugins={[
			Autoplay({
				delay: 5000,
				stopOnMouseEnter: true,
				// Need stopOnInteraction to be false for the autoplay to resume when the mouse leaves
				stopOnInteraction: false
			})
		]}
	>
		<Carousel.Content>
			<Carousel.Item>
				<ProjectCard
					title="Forum Meucci"
					description="A site I built for my school, where students can subscribe to courses and get information about them.
											Uses the school's Google OAuth"
					technologies={['SvelteKit', 'Rust', 'Axum', 'SQLx', 'PostgreSQL']}
					githubLink="https://github.com/PolpOnline/forum-meucci"
					thumbnail={ForumImg}
					backdropColor="#09090B"
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
					backdropColor="#09090B"
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
					backdropColor="#000000"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<ProjectCard
					title="GPU Usage Waybar"
					description="A simple tool to display GPU usage on Waybar (Wayland status bar)"
					technologies={['Rust']}
					githubLink="https://github.com/PolpOnline/gpu-usage-waybar"
					thumbnail={GPUUsageWaybarImg}
					backdropColor="#1C1E2D"
				/>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous variant="outline" class="not-md:hidden" />
		<Carousel.Next variant="outline" class="not-md:hidden" />
	</Carousel.Root>
</div>
