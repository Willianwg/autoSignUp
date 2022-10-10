import { Page } from 'puppeteer';

export class FirstForm {

    constructor(private page:Page){

    }

    async setFirstName(){
        await this.page.evaluate(
            ()=> document.querySelector('input#firstName').setAttribute('value','Willian')
        ); 
    }

    async setLastName(){
        await this.page.evaluate(
            ()=>document.querySelector('input#lastName').setAttribute('value', 'Guedes')
        );
    }

    async setEmail(){
        const email = await this.page.evaluate(
            ()=>{
                const randomNumber = Math.random().toFixed(6);
                const userEmail = 'Guedes'+ randomNumber;
                document.querySelector('input#username').setAttribute('value', userEmail);
                return userEmail;
            }    
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