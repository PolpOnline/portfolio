import { expect, test } from '@playwright/test';

test('home page renders without errors', async ({ page }) => {
	const pageErrors: string[] = [];

	page.on('pageerror', (error) => {
		pageErrors.push(error.message);
	});

	const response = await page.goto('/', { waitUntil: 'domcontentloaded' });

	expect(response?.status()).toBe(200);
	await expect(page).toHaveTitle('PolpOnline');

	await expect(page.getByRole('heading', { name: 'PolpOnline', level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'me@polp.online' })).toHaveAttribute(
		'href',
		'mailto:me@polp.online'
	);
	await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'My Skills' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();

	const projectImage = page.getByAltText('Monitor thumbnail');
	await projectImage.scrollIntoViewIfNeeded();
	await expect
		.poll(() => projectImage.evaluate((element) => (element as HTMLImageElement).naturalWidth))
		.toBeGreaterThan(0);

	expect(pageErrors).toEqual([]);
});
