# Playwright Testing Lesson: Building a Pokémon Name Scraper

## Introduction: Using Playwright to Collect Pokémon Names

Playwright is a powerful tool for end-to-end testing. It allows us to step into a user’s shoes and simulate their experience when interacting with a web application. Whether you’re testing, scraping data, or automating tasks, Playwright provides the flexibility and precision needed for web development.

Pokémon Name Collection: we’ll use Playwright to accomplish a specific mission, collecting the names of the original 151 Pokémon. Yes, those classic creatures from our childhood, the ones that sparked our imaginations and fueled countless battles on the playground. The new Pokémon? Well, they’re cool too, but for now, let’s focus on the OGs.

# The Challenge

- Visit the Pokémon Database: The journey begins at https://pokemondb.net/pokedex/all. This comprehensive Pokédex contains information about every Pokémon species. We’ll scrape the names from here.
- Mask Our Identity: Some websites don’t take kindly to data scraping. To avoid detection, we’ll use a random agent; a digital disguise that keeps our intentions hidden.
- Collect and Store: Once we’ve gathered the Pokémon names, we’ll store them in an array. Why? Because arrays are like Poké Balls, they hold our precious data until we’re ready to unleash it.
- Ready? Let’s Catch 'Em All! By the end of this lesson, you’ll have not only a working Playwright script but also a list of those iconic Pokémon names. So grab your Poké Balls (or, you know, your keyboard), and let’s get started!

## Ticket 1: Set Up Dependencies and Examine package.json

### Instructions:

1. Install Dependencies:

- Run `npm i` in your terminal to install all project dependencies.
- Check your package.json file to see which dependencies are being used.

## Ticket 2: Understand randomUseragent

### Instructions:

1. Console Log randomUseragent:

- Investigate what randomUseragent is doing in your code.
- Add a console.log(randomAgent) statement to see its behavior when you run the program.
- Why is this a good idea for projects like this?

## Ticket 3: Run the Program and Capture a Screenshot

### Instructions:

1. Execute the Program:

- In your terminal, enter `node index.js` to run your program.
- The current setup takes a screenshot of a webpage.

2. Check for the Screenshot:

- Verify that the screenshot appears in your project files.

## Ticket 4: Inspect Pokémon Names on the Pokémon Database

### Instructions:

1. Inspect the Pokémon Database Page:

- Open the Pokémon Database Pokédex in your browser.
- Use Chrome DevTools to explore how Pokémon names are structured in the HTML.

2. Plan for Data Gathering:

- Make a plan for extracting the Pokémon names from the page.
- Consider which elements and selectors you’ll use.

## Ticket 5: Scrape Pokémon Names and Write to a File

### Instructions:

1. Use $$eval to Select Relevant Elements:

- Utilize Playwright’s $$eval method to select the classes containing Pokémon names.

- You will be able to find some help for this here `https://medium.com/@ambysan/scraping-web-data-with-playwright-a-practical-guide-73f9e2aecdd9` but you can also ask the school of code bot for help if you get stuck.

2. Extract Pokémon Names:

- Extract the text content of these elements.

3. Write to a File:

- Use Node.js’s fs module (specifically fs.writeFile()) to save the Pokémon names to a text file (e.g., “pokemon-names.txt”).

## Ticket 6: Filter Only the First 151 Pokémon

### Instructions:

1. Apply JavaScript Magic:

- Write code to ensure you capture only the first 151 Pokémon names.
- These represent the original Pokémon from the early games.

## Stretch Goals: Enhance Your Scraper

### Instructions:

1. Explore Additional Pokémon Data:

- Investigate other relevant elements on the Pokémon Database website (e.g., types, abilities, stats).

2. Adapt Your Playwright Script:

- Modify your Playwright script to scrape the additional information alongside the names.

3. Save Additional Data:

- Save this extended data (beyond just names) in an appropriate format.
