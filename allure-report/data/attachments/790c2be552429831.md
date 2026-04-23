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
  - waiting for getByRole('link', { name: 'Recruitment' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/recruitment/viewRecruitmentModule">…</a>

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
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
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
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
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Today at 04:02 PM (GMT -4)"
          - generic [ref=e153]:
            - generic [ref=e154]: 0h 1m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Apr 20 - Apr 26
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 1m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e184]:
            - button [ref=e185] [cursor=pointer]
            - paragraph [ref=e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e196]:
        - generic [ref=e198]:
          - generic [ref=e199]: 
          - paragraph [ref=e200]: Quick Launch
        - separator [ref=e201]
        - generic [ref=e203]:
          - generic [ref=e204]:
            - button "Assign Leave" [ref=e205] [cursor=pointer]
            - generic "Assign Leave" [ref=e208]:
              - paragraph [ref=e209]: Assign Leave
          - generic [ref=e210]:
            - button "Leave List" [ref=e211] [cursor=pointer]
            - generic "Leave List" [ref=e218]:
              - paragraph [ref=e219]: Leave List
          - generic [ref=e220]:
            - button "Timesheets" [ref=e221] [cursor=pointer]
            - generic "Timesheets" [ref=e227]:
              - paragraph [ref=e228]: Timesheets
          - generic [ref=e229]:
            - button "Apply Leave" [ref=e230] [cursor=pointer]
            - generic "Apply Leave" [ref=e233]:
              - paragraph [ref=e234]: Apply Leave
          - generic [ref=e235]:
            - button "My Leave" [ref=e236] [cursor=pointer]
            - generic "My Leave" [ref=e241]:
              - paragraph [ref=e242]: My Leave
          - generic [ref=e243]:
            - button "My Timesheet" [ref=e244] [cursor=pointer]
            - generic "My Timesheet" [ref=e247]:
              - paragraph [ref=e248]: My Timesheet
      - generic [ref=e250]:
        - generic [ref=e252]:
          - generic [ref=e253]: 
          - paragraph [ref=e254]: Buzz Latest Posts
        - separator [ref=e255]
        - generic [ref=e257]:
          - generic [ref=e258]:
            - generic [ref=e259] [cursor=pointer]:
              - img "profile picture" [ref=e261]
              - generic [ref=e262]:
                - paragraph [ref=e263]: Michael James Taylor
                - paragraph [ref=e264]: 2020-08-10 05:38 AM
            - separator [ref=e265]
            - paragraph [ref=e266]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=e267]:
            - generic [ref=e268] [cursor=pointer]:
              - img "profile picture" [ref=e270]
              - generic [ref=e271]:
                - paragraph [ref=e272]: Sania Shaheen
                - paragraph [ref=e273]: 2020-08-10 05:38 AM
            - separator [ref=e274]
            - paragraph [ref=e275]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=e276]:
            - generic [ref=e277] [cursor=pointer]:
              - img "profile picture" [ref=e279]
              - generic [ref=e280]:
                - paragraph [ref=e281]: Rebecca Harmony
                - paragraph [ref=e282]: 2020-08-10 05:34 AM
            - separator [ref=e283]
            - paragraph [ref=e284]: Throwback Thursdays!!
            - img
          - generic [ref=e285]:
            - generic [ref=e286] [cursor=pointer]:
              - img "profile picture" [ref=e288]
              - generic [ref=e289]:
                - paragraph [ref=e290]: Russel Hamilton
                - paragraph [ref=e291]: 2020-08-10 05:33 AM
            - separator [ref=e292]
            - paragraph [ref=e293]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=e295]:
        - generic [ref=e296]:
          - paragraph [ref=e301]: Employees on Leave Today
          - generic [ref=e302] [cursor=pointer]: 
        - separator [ref=e303]
        - generic [ref=e305]:
          - img "No Content" [ref=e306]
          - paragraph [ref=e307]: No Employees are on Leave Today
      - generic [ref=e309]:
        - generic [ref=e311]:
          - generic [ref=e312]: 
          - paragraph [ref=e313]: Employee Distribution by Sub Unit
        - separator [ref=e314]
        - list [ref=e319]:
          - listitem [ref=e320] [cursor=pointer]:
            - generic "Engineering" [ref=e322]
          - listitem [ref=e323] [cursor=pointer]:
            - generic "Human Resources" [ref=e325]
          - listitem [ref=e326] [cursor=pointer]:
            - generic "Administration" [ref=e328]
          - listitem [ref=e329] [cursor=pointer]:
            - generic "Client Services" [ref=e331]
          - listitem [ref=e332] [cursor=pointer]:
            - generic "Unassigned" [ref=e334]
      - generic [ref=e336]:
        - generic [ref=e338]:
          - generic [ref=e339]: 
          - paragraph [ref=e340]: Employee Distribution by Location
        - separator [ref=e341]
        - list [ref=e346]:
          - listitem [ref=e347] [cursor=pointer]:
            - generic "Texas R&D" [ref=e349]
          - listitem [ref=e350] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e352]
          - listitem [ref=e353] [cursor=pointer]:
            - generic "Unassigned" [ref=e355]
    - generic [ref=e356]:
      - paragraph [ref=e357]: OrangeHRM OS 5.8
      - paragraph [ref=e358]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e359] [cursor=pointer]:
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
> 30 |         await this.elements.btn_recruitment().click();
     |                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 | }
  32 |      async  clickCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  33 |       await this.elements.btn_candidates().click();
  34 | }
  35 | //         getbtnCandidat(){        // a verifier si je dois juste voir le boutton ou cliquer dessus
  36 | //         return this.elements.btn_candidates();
  37 | // }
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