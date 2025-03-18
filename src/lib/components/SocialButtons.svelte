<script lang="ts">
	import SkillIconsGithubDark from '~icons/skill-icons/github-dark';
	import SkillIconsDiscord from '~icons/skill-icons/discord';
	import LogosTelegram from '~icons/logos/telegram';
	import SkillIconsInstagram from '~icons/skill-icons/instagram';
</script>

<div class="flex flex-row items-center justify-center gap-6 text-4xl">
	<div style="--backdrop-color: #242938" class="icon-shadow">
		<a href="https://github.com/PolpOnline" target="_blank">
			<SkillIconsGithubDark />
		</a>
	</div>
	<div style="--backdrop-color: #0088CC" class="icon-shadow">
		<a href="https://telegram.me/PolpOnline" target="_blank">
			<LogosTelegram />
		</a>
	</div>
	<div style="--backdrop-color: #5865F2" class="icon-shadow">
		<a href="https://discordapp.com/users/524254508151209995" target="_blank" class="icon-shadow">
			<SkillIconsDiscord />
		</a>
	</div>
	<div style="--backdrop-color: #A830BE" class="icon-shadow">
		<a href="https://instagram.com/tommaso.melacarne" target="_blank">
			<SkillIconsInstagram />
		</a>
	</div>
</div>

<style lang="postcss">
	.icon-shadow {
		transition: filter 0.3s ease-in-out;
	}

	.icon-shadow:hover {
		filter: drop-shadow(0 0 0.25rem var(--backdrop-color));
	}
</style>
