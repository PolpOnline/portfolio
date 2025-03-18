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

<style>
	#wheel {
		animation: wheelMove 3s ease-in-out infinite;
	}

	@keyframes wheelMove {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(30px);
		}
	}
</style>
