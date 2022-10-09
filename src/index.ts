import readline from 'readline-sync';
import puppeteer from 'puppeteer';

async function machine():Promise<void>{
    await askUser();
    await Pup();
}

async function askUser(): Promise<void>{
    const userResponse : string = await readline.question("what do you think? ");
    console.log(userResponse);
}

async function Pup() {
     const browser = await puppeteer.launch();
     // Create a new incognito browser context.
     const context = await browser.createIncognitoBrowserContext();
     // Create a new page in a pristine context.
     const page = await context.newPage();
     // Do stuff
     const url = 'https://pt-br.facebook.com/';
     await page.goto(url);
    
     const result = await page.evaluate(
         () => document.querySelector('._8eso').textContent 
     )

    console.log(result);
    browser.close();
   };

machine();