<script lang="ts">
	// noinspection ES6UnusedImports
	import * as Carousel from '$lib/components/ui/carousel';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ForumImg from '$lib/img/screenshots/forum_meucci.png?enhanced';
	import MonitorImg from '$lib/img/screenshots/monitor.png?enhanced';
</script>

<div class="mx-auto my-3 w-full max-w-11/12">
	<Carousel.Root>
		<Carousel.Content>
			<Carousel.Item>
				<ProjectCard
					title="Forum Meucci"
					description="A site I built for my school, where students can subscribe to courses and get information about them."
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
		</Carousel.Content>
		<Carousel.Previous variant="outline" />
		<Carousel.Next variant="outline" />
	</Carousel.Root>
</div>
