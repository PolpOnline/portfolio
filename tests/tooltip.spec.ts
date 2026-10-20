import { expect, test, type Page } from '@playwright/test';

const tooltip = (page: Page) => page.locator('[data-slot="tooltip-content"]');

test('tooltip opens on hover on desktop', async ({ page }, testInfo) => {
	test.skip(testInfo.project.name !== 'desktop-chromium');

	await page.goto('/', { waitUntil: 'networkidle' });
	const trigger = page.getByRole('button', { name: 'Svelte', exact: true });
	await trigger.scrollIntoViewIfNeeded();
	await trigger.hover();

	await expect(tooltip(page)).toBeVisible({ timeout: 15_000 });
	await expect(tooltip(page)).toContainText('Svelte');

	await page.mouse.move(10, 710);
	await expect(tooltip(page)).toBeHidden();
});

test('tooltip toggles on tap on mobile', async ({ page }, testInfo) => {
	test.skip(testInfo.project.name !== 'mobile-chromium');

	await page.goto('/', { waitUntil: 'networkidle' });
	const trigger = page.getByRole('button', { name: 'Svelte', exact: true });
	await trigger.scrollIntoViewIfNeeded();

	await trigger.tap();
	await expect(tooltip(page)).toBeVisible({ timeout: 15_000 });
	await expect(tooltip(page)).toContainText('Svelte');
	await expect(trigger).toHaveAttribute('data-tilt', 'true');
	await expect
		.poll(() => trigger.evaluate((element) => getComputedStyle(element).scale))
		.toBe('1.1');
	await expect
		.poll(() => trigger.evaluate((element) => getComputedStyle(element).rotate))
		.not.toBe('none');

	await trigger.tap();
	await expect(tooltip(page)).toBeHidden();
	await expect(trigger).not.toHaveAttribute('data-tilt', 'true');
	await expect
		.poll(() => trigger.evaluate((element) => getComputedStyle(element).scale))
		.toBe('none');
	await expect
		.poll(() => trigger.evaluate((element) => getComputedStyle(element).rotate))
		.toBe('none');
});
