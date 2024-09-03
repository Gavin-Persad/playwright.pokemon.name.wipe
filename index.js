import { chromium } from 'playwright';
import randomUseragent from 'random-useragent';
import fs from 'fs/promises';

async function main() {
	// Create Random Agent
	const randomAgent = randomUseragent.getRandom();

	// Launch browser
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({ userAgent: randomAgent });
	const page = await context.newPage({ byPassCSP: true });
	try {
		await page.goto('https://pokemondb.net/pokedex/all');
		page.setDefaultTimeout(10000);
		await page.setViewportSize({ width: 800, height: 600 });

		// Add a delay (optional) to ensure the page fully loads
		await page.waitForTimeout(2000);

		const screenshot = await page.screenshot({
			path: 'pokemon-screenshot.png',
		});
		console.log('Screenshot saved as pokemon-screenshot.png');

		// ADD YOUR CODE HERE

		await browser.close();
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

main();
