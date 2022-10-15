import puppeteer from 'puppeteer';
import readline from 'readline-sync';

import { FirstForm } from './createAccount/createAccount';

async function execute():Promise<void>{
    const userResponse = readline.question('Choose a username: ');
    const username = userResponse.split(' ');

    await Pup(username[0]);
}

async function Pup(username) {
     const browser = await puppeteer.launch({ headless:false });
     const context = await browser.createIncognitoBrowserContext();
     const page = await context.newPage();

     const url = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp';
     await page.goto(url);

     const form = new FirstForm(page);
    
     await form.setFirstName(username);
     await form.setLastName(username);
     await form.setEmail(username);
     await form.setPassword();
     await form.advance();

   };

execute();