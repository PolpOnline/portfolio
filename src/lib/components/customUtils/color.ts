/**
 * Determines if a color is bright (should use dark text) or dark (should use light text)
 * @param hexColor - Hex color string like "#ffffff"
 * @returns boolean - true if the color is bright
 */
export function isBrightColor(hexColor: string): boolean {
	// Remove # if present
	const hex = hexColor.replace('#', '');

	// Convert hex to RGB
	const r = parseInt(hex.substring(0, 2), 16) || 0;
	const g = parseInt(hex.substring(2, 4), 16) || 0;
	const b = parseInt(hex.substring(4, 6), 16) || 0;

	// Calculate luminance - using standard formula for perceived brightness
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Return true if bright (luminance > 0.5)
	return luminance > 0.5;
}
