# Playwright Testing Lesson: Building a Pokémon Name Scraper

## Ticket 1: Install Playwright with Chromium

Set up Playwright with Chromium for browser automation.

### Instructions:

Install Node.js if not already installed.
Open your terminal or command prompt.
Run the following command to install Playwright with Chromium:

`npm install playwright`

## Ticket 2: Create a Random User Agent

Generate a random user agent for your Playwright browser.

### Instructions:

- In your JavaScript code, use Playwright’s

  `browserContext.newContext()`

method to create a new context.

- Set a random user agent using

  `context.setUserAgent()`

## Ticket 3: Visit the Pokémon Database

Navigate to the Pokémon Database website.

### Instructions:

- Use Playwright to open a new page.
- Navigate to `https://pokemondb.net/pokedex/all`

## Ticket 4: Scrape Pokémon Names

Extract the names of the first 151 Pokémon.

### Instructions:

- Use Playwright to select the relevant elements containing Pokémon names.
- Extract the text content of these elements.
- Filter out only the first 151 names (original Pokémon).

## Ticket 5: Write Pokémon Names to a File

Save the Pokémon names to a file using `fs.writeFile()`

### Instructions:

- Create an array containing the Pokémon names.
- Use `fs.writeFile()` to save this array to a text file (e.g., “pokemon-names.txt”).

## Stretch Goals: Enhance Your Scraper

Extend your scraper to collect additional Pokémon data (e.g., types, abilities, stats).

### Instructions:

- Explore the Pokémon Database website to identify relevant elements.
- Adapt your Playwright script to scrape more information.
- Save this additional data alongside the names.
