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
  - waiting for getByRole('button', { name: 'Save' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-235bef90="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Michael Taylor
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - link "Candidates" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "Vacancies" [ref=e135]:
              - /url: "#"
          - button "" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]: 
  - generic [ref=e139]:
    - generic [ref=e142]:
      - heading "Add Candidate" [level=6] [ref=e143]
      - separator [ref=e144]
      - generic [ref=e145]:
        - generic [ref=e149]:
          - generic [ref=e151]: Full Name*
          - generic [ref=e152]:
            - textbox "First Name" [ref=e155]: Alex
            - textbox "Middle Name" [ref=e158]: bruno
            - textbox "Last Name" [ref=e161]: Test
        - generic [ref=e165]:
          - generic [ref=e167]: Vacancy
          - generic [ref=e170] [cursor=pointer]:
            - generic [ref=e171]: "-- Select --"
            - generic [ref=e173]: 
        - generic [ref=e175]:
          - generic [ref=e177]:
            - generic [ref=e179]: Email*
            - textbox "Type here" [ref=e181]
          - generic [ref=e183]:
            - generic [ref=e185]: Contact Number
            - textbox "Type here" [active] [ref=e187]: test@gmail.com
            - generic [ref=e188]: Allows numbers and only + - / ( )
        - generic [ref=e192]:
          - generic [ref=e193]:
            - generic [ref=e195]: Resume
            - generic [ref=e196]:
              - button "Choose File"
              - generic [ref=e197]:
                - generic [ref=e198] [cursor=pointer]: Browse
                - generic [ref=e199]: No file selected
                - generic [ref=e200] [cursor=pointer]: 
          - paragraph [ref=e201]: Accepts .docx, .doc, .odt, .pdf, .rtf, .txt up to 1MB
        - generic [ref=e203]:
          - generic [ref=e205]:
            - generic [ref=e207]: Keywords
            - textbox "Enter comma seperated words..." [ref=e209]
          - generic [ref=e211]:
            - generic [ref=e213]: Date of Application
            - generic [ref=e216]:
              - textbox "yyyy-dd-mm" [ref=e217]: 2026-23-04
              - generic [ref=e218] [cursor=pointer]: 
        - generic [ref=e222]:
          - generic [ref=e224]: Notes
          - textbox "Type here" [ref=e226]
        - generic [ref=e230]:
          - generic [ref=e232]: Consent to keep data
          - generic [ref=e235] [cursor=pointer]:
            - checkbox "" [ref=e236]
            - generic [ref=e238]: 
        - separator [ref=e239]
        - generic [ref=e240]:
          - paragraph [ref=e241]: "* Required"
          - button "Cancel" [ref=e242] [cursor=pointer]
          - button "Save" [ref=e243] [cursor=pointer]
    - generic [ref=e244]:
      - paragraph [ref=e245]: OrangeHRM OS 5.8
      - paragraph [ref=e246]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e247]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 64 |         await this.elements.btn_save().click();
     |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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