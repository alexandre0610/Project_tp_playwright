# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: enregistrer.spec.ts >> Ajouter candidat
- Location: tests\enregistrer.spec.ts:22:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | import { connexionpom } from "../pages/connexionpom.page";
  3  | import { AjouterCandidatpom } from "../pages/AjouterCandidatpom.page";
  4  |  let cp : connexionpom;
  5  |  let Aj :AjouterCandidatpom;
  6  | 
  7  | test.beforeEach("setup", async ({page})=>{
  8  |     cp = new connexionpom(page);
  9  |     Aj = new AjouterCandidatpom(page);
  10 | //  Given je visite le site 
> 11 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     |                ^ Error: page.goto: Test ended.
  12 |      await cp.saisirUsername("Admin");
  13 | //     And je saisis le prénom "admin123"
  14 |     await cp.saisirPassword("admin123");
  15 | //     And  je click sur le bouton login
  16 |     await cp.clickLogin();
  17 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  18 | 
  19 | 
  20 | })
  21 | // Scenario: Ajouter candidat
  22 | test("Ajouter candidat",{tag:"@ajouter"},async({page})=>{
  23 | //     When je click sur le bouton recruitment
  24 |     await Aj.clickRecruitment();
  25 | //     And je click sur le bouton Candidates
  26 |     await Aj.clickCandidat();
  27 | //     And je click sur le bouton Add
  28 |     await Aj.clickAdd();
  29 | //     And je remplie le champs First Name
  30 |     await Aj.saisirFirtsNmane("Alex")
  31 | //     And  je rempise le champs Midlle name
  32 |     await Aj.saisirMiddleNmane("bruno")
  33 | //     And je remple le champs Last Name
  34 |     await Aj.saisirLastNmane("Test")
  35 | //     And je remplie le champs Email
  36 |     await Aj.saisirEmail("test@gmail.com")
  37 | 
  38 | // et ici on pouvait egaleùent appeller la methode infoCandidat pour remplir les champs precédent pour rendre notre code plus court
  39 | //  await Aj.infoCandidat("Alex","Anis","Test","test@gmail.com");
  40 | 
  41 | //     And je click sur le bouton Save
  42 |     await Aj.clickSave();
  43 | //     Then s'affiche la page  contenant le bouton  Application Stage
  44 |     await expect(Aj.getAppStage()).toBeVisible()
  45 |     // await expect(Aj.getCandProfile()).toBeVisible();
  46 | 
  47 | })
```