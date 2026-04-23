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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add' })
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Session Expired
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
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
  32 |      async  clickCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  33 |       await this.elements.btn_candidates().click();
  34 | }
  35 | //         getbtnCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  36 | //         return this.elements.btn_candidates();
  37 | // }
  38 |     async  clickAdd(){
> 39 |         await this.elements.btn_add().click();
     |                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  40 | }
  41 | 
  42 |     async saisirFirtsNmane(f:string){
  43 |         await this.elements.first_name().fill(f);   
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