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
	},
	Redis: {
		color: '#D82C20'
	},
	Bootstrap: {
		color: '#6E2CF2'
	},
	'Loco.rs': {
		color: '#C12110'
	},
	SeaORM: {
		color: '#4E89E8'
	}
};

export function getTechColor(tech: string): string | null {
	const techInfo = techMap[tech];
	if (techInfo && techInfo.color) {
		return techInfo.color;
	}
	return null; // Default color if not found
}
