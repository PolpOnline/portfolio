export type TechInfo = {
	color?: string;
};

export const techMap: Record<string, TechInfo> = {
	SvelteKit: {
		color: '#FF3E00'
	},
	Rust: {
		color: '#DFA484'
	},
	Axum: {
		color: undefined
	},
	SQLx: {
		color: undefined
	},
	PostgreSQL: {
		color: '#33678F'
	}
};

export function getTechColor(tech: string): string {
	const techInfo = techMap[tech];
	if (techInfo && techInfo.color) {
		return techInfo.color;
	}
	return 'initial'; // Default color if not found
}
