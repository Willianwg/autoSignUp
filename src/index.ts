import puppeteer from 'puppeteer';
import { FirstForm } from './createAccount/createAccount';

async function execute():Promise<void>{
    await Pup();
}

async function Pup() {
     const browser = await puppeteer.launch({ headless:false });
     // Create a new incognito browser context.
     const context = await browser.createIncognitoBrowserContext();
     // Create a new page in a pristine context.
     const page = await context.newPage();
     // Do stuff
     const url = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp';
     await page.goto(url);

     const form = new FirstForm(page);
    
     await form.setFirstName();
     await form.setLastName();
     await form.setEmail();
     await form.setPassword();
     await form.advance();

   };

execute();