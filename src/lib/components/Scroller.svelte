<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const wheel = document.getElementById('wheel');

		gsap.to(wheel, {
			duration: 1.5,
			y: 30,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});
	});
</script>

<svg
	width="32px"
	height="100%"
	viewBox="0 0 247 390"
	xmlns="http://www.w3.org/2000/svg"
	stroke-linejoin="round"
	stroke-linecap="round"
	stroke-miterlimit="1.5"
>
	<path id="wheel" d="M123.359,79.775l0,72.843" fill="none" stroke-width="20px" stroke="#fff" />
	<path
		id="mouse"
		d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
		fill="none"
		stroke-width="20px"
		stroke="#fff"
	/>
</svg>
