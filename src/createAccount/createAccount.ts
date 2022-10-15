import { Page } from 'puppeteer';

export class FirstForm {

    constructor(private page:Page){

    }

    async setFirstName(username){
        await this.page.evaluate(
            (val) => (<HTMLInputElement>document.querySelector('input#firstName')).value = val, 
            username
        ); 
    }

    async setLastName(username){
        await this.page.evaluate(
            (val) => (<HTMLInputElement>document.querySelector('input#lastName')).value = val, 
            username
        ); 
    }

    async setEmail(username){
        const randomNumber = Math.random().toFixed(6);
        const userEmail = username + randomNumber;

        const email = await this.page.evaluate(
            (val)=>{
                const input  = (<HTMLInputElement>document.querySelector('input#username')).value = val;
                return input;
            }, userEmail
        );

        console.log('Email: '+ email + '@gmail.com');
    }

    async setPassword (){
        const accessCode : string = await this.page.evaluate(
            ()=>{
                const randomNumber = Math.random().toFixed(7);
                document.querySelectorAll('.whsOnd.zHQkBf')[3].setAttribute('value', randomNumber);
                document.querySelectorAll('.whsOnd.zHQkBf')[4].setAttribute('value', randomNumber);
                return randomNumber;
            }    
        );

        console.log('Password: '+ accessCode);
    }
    async advance(){

        await this.page.evaluate(
            ()=>{
                 const button = document.querySelector('button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.qIypjc.TrZEUc.lw1w4b') as HTMLElement;

                 return button.click();
            }
        );
    }

}