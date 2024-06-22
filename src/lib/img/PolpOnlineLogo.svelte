<script lang="ts">
	let className = '';
	export { className as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="10000"
	height="10000"
	viewBox="0 0 10000 10000"
	fill="none"
	class={className}
>
	<g id="PolpOnline logo">
		<rect width="10000" height="10000" fill="#DCD2D3" />
		<rect
			id="mouth"
			x="3469.38"
			y="6409.29"
			width="3031.25"
			height="340.708"
			fill="#372B2B"
			stroke="#372B2B"
			stroke-width="30"
			stroke-dasharray="6743.916015625"
			stroke-linecap="round"
		/>
		<g id="eyes">
			<circle
				id="left"
				cx="2640"
				cy="3905"
				r="645"
				fill="transparent"
				stroke="#372B2B"
				stroke-width="30"
				stroke-dasharray="4052.24365234375"
				stroke-linecap="round"
			/>
			<circle
				id="right"
				cx="7361"
				cy="3910"
				r="645"
				fill="transparent"
				stroke="#372B2B"
				stroke-width="30"
				stroke-dasharray="4052.24365234375"
				stroke-linecap="round"
			/>
		</g>
	</g>
</svg>

<style lang="postcss">
	:root {
		--animation-duration: 2s;
	}

	@keyframes draw-eyes {
		0% {
			stroke-dashoffset: 4052.24365234375;
		}
		50% {
			stroke-dashoffset: 0;
		}
		50.01% {
			fill: transparent;
		}
		100% {
			fill: #372b2b;
		}
	}

	#left,
	#right {
		animation: draw-eyes var(--animation-duration) forwards;
	}

	@keyframes draw-mouth {
		0% {
			stroke-dashoffset: 6743.916015625;
		}
		50% {
			stroke-dashoffset: 0;
		}
		50.01% {
			fill: transparent;
		}
		100% {
			fill: #372b2b;
		}
	}

	#mouth {
		animation: draw-mouth var(--animation-duration) forwards;
	}
</style>
