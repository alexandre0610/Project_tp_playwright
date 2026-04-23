import { Page } from "@playwright/test";

export class AjouterCandidatpom{
    readonly page : Page;

    constructor(p:Page){
        this.page = p ;

    }

    // locator
    elements={
    // btn_Application_stage:()=> this.page.getByRole("heading", { name: "Application Stage" }),
    btn_Application_stage:()=> this.page.locator('.oxd-text.oxd-text--h6.orangehrm-main-title'),

    // btn_Candidate_Profile:()=> this.page.getByRole("heading", { name: 'Candidate Profile' }),
    // btn_Candidate_Profile:()=> this.page.getByRole(.oxd-text.oxd-text--h6 orangehrm-main-title')),

    btn_recruitment:()=>this.page.getByRole("link", { name: "Recruitment" }),
    btn_candidates:()=>this.page.getByRole("link", { name: "Candidates" }),
    btn_add:()=> this.page.getByRole("button", { name: "Add" }),
    first_name :()=> this.page.getByRole("textbox", { name: "First Name" }),
    middle_name :()=> this.page.getByRole("textbox", { name: "Middle Name" }),
    last_name :()=> this.page.getByRole("textbox", { name: "Last Name" }),
    email:()=> this.page.getByPlaceholder('Type here').nth(1),
    btn_save:()=>this.page.getByRole("button", { name: "Save" }) 
    }

    async  clickRecruitment(){
        await this.elements.btn_recruitment().click();
}
    //  async  clickCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
    //   await this.elements.btn_candidates().click();
// }
         getbtnCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
       return this.elements.btn_candidates();
}
    async  clickAdd(){
        await this.elements.btn_add().click();
}

    // async saisirFirstName(f:string){
    //     await this.elements.first_name().fill(f);   
    // }
    // async saisirMiddleName(m:string){
    //      await this.elements.middle_name().fill(m);   
    // }
    // async saisirLastName(l:string){
    //     await this.elements.last_name().fill(l);   
    // }
    // async saisirEmail(e:string){
    //     await this.elements.email().fill(e);   
    // }

    // Nous avons transformer les mathodes saisies les differnts champs  du candidat en une seule fonction apeller: infoCandidat
        async infoCandidat(fname : string , mname : string, lname : string , a_email : string){
        await this.elements.first_name().fill(fname);
        await this.elements.middle_name().fill(mname);
        await this.elements.last_name().fill(lname);
        await this.elements.email().fill(a_email);
}

    async clickSave(){
        await this.elements.btn_save().click();
    }
    getAppStage(){
        return this.elements.btn_Application_stage();

    }
    // on peut également rajouter cette afin de voir si le bouton candiadtes profile va s'afficher. 
    // getCandProfile(){
    //     return this.elements.btn_Candidate_Profile();

    // }

}