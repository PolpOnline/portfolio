<script lang="ts">
	import SkillIconsArchDark from '~icons/skill-icons/arch-dark';
	import SkillIconsArduino from '~icons/skill-icons/arduino';
	import SkillIconsBashDark from '~icons/skill-icons/bash-dark';
	import SkillIconsBootstrap from '~icons/skill-icons/bootstrap';
	import SkillIconsC from '~icons/skill-icons/c';
	import SkillIconsCloudflareDark from '~icons/skill-icons/cloudflare-dark';
	import SkillIconsCpp from '~icons/skill-icons/cpp';
	import SkillIconsCss from '~icons/skill-icons/css';
	import SkillIconsDebianDark from '~icons/skill-icons/debian-dark';
	import SkillIconsDiscordjsDark from '~icons/skill-icons/discordjs-dark';
	import SkillIconsDocker from '~icons/skill-icons/docker';
	import SkillIconsGit from '~icons/skill-icons/git';
	import SkillIconsHtml from '~icons/skill-icons/html';
	import SkillIconsIdeaDark from '~icons/skill-icons/idea-dark';
	import SkillIconsJavaDark from '~icons/skill-icons/java-dark';
	import SkillIconsJavascript from '~icons/skill-icons/javascript';
	import SkillIconsLinuxDark from '~icons/skill-icons/linux-dark';
	import SkillIconsBunDark from '~icons/skill-icons/bun-dark';
	import SkillIconsNuxtjsDark from '~icons/skill-icons/nuxtjs-dark';
	import SkillIconsPnpmDark from '~icons/skill-icons/pnpm-dark';
	import SkillIconsPostgresqlDark from '~icons/skill-icons/postgresql-dark';
	import SkillIconsPostman from '~icons/skill-icons/postman';
	import SkillIconsPrisma from '~icons/skill-icons/prisma';
	import SkillIconsRedisDark from '~icons/skill-icons/redis-dark';
	import SkillIconsRust from '~icons/skill-icons/rust';
	import SkillIconsSvelte from '~icons/skill-icons/svelte';
	import SkillIconsTailwindcssDark from '~icons/skill-icons/tailwindcss-dark';
	import SkillIconsTypescript from '~icons/skill-icons/typescript';
	import SkillIconsViteDark from '~icons/skill-icons/vite-dark';
	import SkillIconsVuejsDark from '~icons/skill-icons/vuejs-dark';
	import SkillsContainer from '$lib/components/SkillsContainer.svelte';
	import TooltipSkill from '$lib/components/TooltipSkill.svelte';
	import { TooltipProvider } from '$lib/components/ui/tooltip';
</script>

<TooltipProvider>
	<div class="my-3 grid grid-cols-1 gap-5 text-center text-2xl xl:grid-cols-3">
		<SkillsContainer title="Frontend">
			<TooltipSkill name="Bootstrap" color="#6e2cf2">
				<SkillIconsBootstrap />
			</TooltipSkill>
			<TooltipSkill name="CSS" color="#1572b6">
				<SkillIconsCss />
			</TooltipSkill>
			<TooltipSkill name="HTML" color="#e34f26">
				<SkillIconsHtml />
			</TooltipSkill>
			<TooltipSkill name="JavaScript" color="#f7df1e">
				<SkillIconsJavascript />
			</TooltipSkill>
			<TooltipSkill name="Nuxt.js" color="#00dc82">
				<SkillIconsNuxtjsDark />
			</TooltipSkill>
			<TooltipSkill name="Svelte" color="#ff3e00">
				<SkillIconsSvelte />
			</TooltipSkill>
			<TooltipSkill name="Tailwind CSS" color="#23bbbc">
				<SkillIconsTailwindcssDark />
			</TooltipSkill>
			<TooltipSkill name="TypeScript" color="#3178c6">
				<SkillIconsTypescript />
			</TooltipSkill>
			<TooltipSkill name="Vue.js" color="#41b883">
				<SkillIconsVuejsDark />
			</TooltipSkill>
			<TooltipSkill name="Vite" color="#646cff">
				<SkillIconsViteDark />
			</TooltipSkill>
		</SkillsContainer>
		<SkillsContainer title="Backend/Systems">
			<TooltipSkill name="Arduino" color="#00979c">
				<SkillIconsArduino />
			</TooltipSkill>
			<TooltipSkill name="Bash" color="#4eaa25">
				<SkillIconsBashDark />
			</TooltipSkill>
			<TooltipSkill name="C" color="#394aab">
				<SkillIconsC />
			</TooltipSkill>
			<TooltipSkill name="C++" color="#00599c">
				<SkillIconsCpp />
			</TooltipSkill>
			<TooltipSkill name="Discord.js" color="#5865f2">
				<SkillIconsDiscordjsDark />
			</TooltipSkill>
			<TooltipSkill name="Java" color="#007396">
				<SkillIconsJavaDark />
			</TooltipSkill>
			<TooltipSkill name="PostgreSQL" color="#336791">
				<SkillIconsPostgresqlDark />
			</TooltipSkill>
			<TooltipSkill name="Prisma" color="#677deb">
				<SkillIconsPrisma />
			</TooltipSkill>
			<TooltipSkill name="Redis" color="#dc382d">
				<SkillIconsRedisDark />
			</TooltipSkill>
			<TooltipSkill name="Rust" color="#dea584">
				<SkillIconsRust />
			</TooltipSkill>
		</SkillsContainer>
		<SkillsContainer title="Tools">
			<TooltipSkill name="Arch Linux" color="#1793d1">
				<SkillIconsArchDark />
			</TooltipSkill>
			<TooltipSkill name="Cloudflare" color="#f38020">
				<SkillIconsCloudflareDark />
			</TooltipSkill>
			<TooltipSkill name="Debian" color="#a81d33">
				<SkillIconsDebianDark />
			</TooltipSkill>
			<TooltipSkill name="Docker" color="#2496ed">
				<SkillIconsDocker />
			</TooltipSkill>
			<TooltipSkill name="Git" color="#f05032">
				<SkillIconsGit />
			</TooltipSkill>
			<TooltipSkill name="IntelliJ IDEA" color="#000000">
				<SkillIconsIdeaDark />
			</TooltipSkill>
			<TooltipSkill name="Linux" color="#fcc624">
				<SkillIconsLinuxDark />
			</TooltipSkill>
			<TooltipSkill name="Bun" color="#fbf0df">
				<SkillIconsBunDark />
			</TooltipSkill>
			<TooltipSkill name="PNPM" color="#f69220">
				<SkillIconsPnpmDark />
			</TooltipSkill>
			<TooltipSkill name="Postman" color="#ff6c37">
				<SkillIconsPostman />
			</TooltipSkill>
		</SkillsContainer>
	</div>
</TooltipProvider>
