import {Page} from "@playwright/test";
export class connexionpom{
    readonly page:Page;
    constructor(p : Page){
        this.page= p ;
    }

    //locators
    elements= {

    username : ()=>this.page.getByRole("textbox",{name:"Username"}) ,
    paswword : ()=>this.page.getByRole("textbox",{name:"Password"}) ,
    btn_login : ()=>this.page.getByRole("button", {name:"login"}),
    mess_error :()=>this.page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")

    }
    async saisirUsername(u:string){
        await this.elements.username().fill(u);
    }
    
    async saisirPassword(p:string){
        await this.elements.paswword().fill(p);
    }
    async clickLogin(){
        await this.elements.btn_login().click()
    }
    
    getMess_error(){
        return this.elements.mess_error()

    }
    
    
}