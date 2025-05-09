import { error, json } from '@sveltejs/kit';

export const GET = async ({ params, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'public, max-age=900'
	});

	const { owner, repo } = params;

	const githubRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
		headers: {
			Accept: 'application/vnd.github.v3+json',
			'User-Agent': 'SvelteKit'
		}
	});

	if (!githubRes.ok) {
		error(githubRes.status, { message: 'Failed to fetch data from GitHub' });
	}

	const data = await githubRes.json();

	const res = data['stargazers_count'] as number;

	return json({ stars: res });
};
