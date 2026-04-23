# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: enregistrer.spec.ts >> Ajouter candidat
- Location: tests\enregistrer.spec.ts:22:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class AjouterCandidatpom{
  4  |     readonly page : Page;
  5  | 
  6  |     constructor(p:Page){
  7  |         this.page = p ;
  8  | 
  9  |     }
  10 | 
  11 |     // locator
  12 |     elements={
  13 |     // btn_Application_stage:()=> this.page.getByRole("heading", { name: "Application Stage" }),
  14 |     btn_Application_stage:()=> this.page.locator('.oxd-text.oxd-text--h6.orangehrm-main-title'),
  15 | 
  16 |     // btn_Candidate_Profile:()=> this.page.getByRole("heading", { name: 'Candidate Profile' }),
  17 |     // btn_Candidate_Profile:()=> this.page.getByRole(.oxd-text.oxd-text--h6 orangehrm-main-title')),
  18 | 
  19 |     btn_recruitment:()=>this.page.getByRole("link", { name: "Recruitment" }),
  20 |     btn_candidates:()=>this.page.getByRole("link", { name: "Candidates" }),
  21 |     btn_add:()=> this.page.getByRole("button", { name: "Add" }),
  22 |     first_name :()=> this.page.getByRole("textbox", { name: "First Name" }),
  23 |     middle_name :()=> this.page.getByRole("textbox", { name: "Middle Name" }),
  24 |     last_name :()=> this.page.getByRole("textbox", { name: "Last Name" }),
  25 |     email:()=> this.page.getByPlaceholder('Type here').nth(1),
  26 |     btn_save:()=>this.page.getByRole("button", { name: "Save" }) 
  27 |     }
  28 | 
  29 |     async  clickRecruitment(){
  30 |         await this.elements.btn_recruitment().click();
  31 | }
  32 |     //  async  clickCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  33 |     //   await this.elements.btn_candidates().click();
  34 | // }
  35 |          getbtnCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  36 |        return this.elements.btn_candidates();
  37 | }
  38 |     async  clickAdd(){
  39 |         await this.elements.btn_add().click();
  40 | }
  41 | 
  42 |     async saisirFirtsNmane(f:string){
> 43 |         await this.elements.first_name().fill(f);   
     |                                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  44 |     }
  45 |     async saisirMiddleNmane(m:string){
  46 |          await this.elements.middle_name().fill(m);   
  47 |     }
  48 |     async saisirLastNmane(l:string){
  49 |         await this.elements.last_name().fill(l);   
  50 |     }
  51 |     async saisirEmail(e:string){
  52 |         await this.elements.email().fill(e);   
  53 |     }
  54 | 
  55 |     // Nous pouvons egalement transformer c'est methode en une seule qui va s'appeler : infoCandidat
  56 |     //     async infoCandidat(fname : string , mname : string, lname : string , a_email : string){
  57 | //         await this.elements.first_name().fill(fname);
  58 | //         await this.elements.middle_name().fill(mname);
  59 | //         await this.elements.last_name().fill(lname);
  60 | //         await this.elements.email().fill(a_email);
  61 | // }
  62 | 
  63 |     async clickSave(){
  64 |         await this.elements.btn_save().click();
  65 |     }
  66 |     getAppStage(){
  67 |         return this.elements.btn_Application_stage();
  68 | 
  69 |     }
  70 |     // getCandProfile(){
  71 |     //     return this.elements.btn_Candidate_Profile();
  72 | 
  73 |     // }
  74 | 
  75 | }
```