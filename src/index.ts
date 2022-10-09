import readline from 'readline-sync';

async function machine():Promise<void>{
    await askUser();

}

async function askUser(): Promise<void>{
    const userResponse : string = await readline.question("what do you think? ");

}

machine();


