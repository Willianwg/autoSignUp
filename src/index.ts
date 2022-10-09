const readline = require ('readline-sync');

async function machine(){

    await askUser();

}

async function askUser(){
    const userResponse = await readline.question("what do you think? ")
    console.log(userResponse);

}

machine();


