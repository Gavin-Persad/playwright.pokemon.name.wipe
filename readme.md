# Playwright Testing Lesson: Building a Pokémon Name Scraper

## Introduction: Using Playwright to Collect Pokémon Names

Playwright is a powerful tool for end-to-end testing. It allows us to step into a user’s shoes and simulate their experience when interacting with a web application. Whether you’re testing, scraping data, or automating tasks, Playwright provides the flexibility and precision needed for web development.

Pokémon Name Collection: we’ll use Playwright to accomplish a specific mission, collecting the names of the original 151 Pokémon. Yes, those classic creatures from our childhood—the ones that sparked our imaginations and fueled countless battles on the playground. The new Pokémon? Well, they’re cool too, but for now, let’s focus on the OGs.

The Challenge

- Visit the Pokémon Database: The journey begins at https://pokemondb.net/pokedex/all. This comprehensive Pokédex contains information about every Pokémon species. We’ll scrape the names from here.
- Mask Our Identity: Some websites don’t take kindly to data scraping. To avoid detection, we’ll use a random agent; a digital disguise that keeps our intentions hidden.
- Collect and Store: Once we’ve gathered the Pokémon names, we’ll store them in an array. Why? Because arrays are like Poké Balls, they hold our precious data until we’re ready to unleash it.
- Ready? Let’s Catch 'Em All! By the end of this lesson, you’ll have not only a working Playwright script but also a list of those iconic Pokémon names. So grab your Poké Balls (or, you know, your keyboard), and let’s get started!

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

ticket 1

// run npm i to install all dependancies
// have a look at the package json what and see what dependancies we are using.
