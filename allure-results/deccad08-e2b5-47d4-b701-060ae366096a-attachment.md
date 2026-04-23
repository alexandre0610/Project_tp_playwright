# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: connexionpom.spec.ts >> connexion identifiant valide
- Location: tests\connexionpom.spec.ts:15:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | import { connexionpom } from "../pages/connexionpom.page";
  3  | 
  4  |  let cp : connexionpom;
  5  |  
  6  | 
> 7  | test.beforeEach("setup", async ({page})=>{
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  8  |     cp = new connexionpom(page);
  9  | //  Given je visite le site 
  10 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  11 | })
  12 | 
  13 | 
  14 | //   Scenario: connexion identifiant valide
  15 | test("connexion identifiant valide",{tag:"@idvalide"},async({page})=>{
  16 | //     When je saisis le Username "Admin"
  17 |     await cp.saisirUsername("Admin");
  18 | //     And je saisis le prénom "admin123"
  19 |     await cp.saisirPassword("admin123");
  20 | //     And  je click sur le bouton login
  21 |     await cp.clickLogin();
  22 |     //Then je suis rediriger sur page d'acceuil ayant pour url"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  23 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  24 |     //  expect(Aj.getUpgrade()).toBeVisible();    le test passe juste sur un site (safarie)
  25 |     //  expect(Aj.getMyFirstname()).toBeVisible();
  26 | 
  27 | })
  28 |   
  29 | //     Scenario: connection identifiant invalide
  30 | test("connexion identifiant ",{tag:"@idinvalide"}, async()=>{
  31 | //     When je saisis le Username "Admin1"
  32 |     await cp.saisirUsername("Admin1");
  33 | //     And je saisis le prénom "admin1234"
  34 |     await cp.saisirPassword("admin1234");
  35 | //     And  je click sur le bouton login
  36 |     await cp.clickLogin();
  37 | //     Then message s'affiche " Invalid credentials"
  38 |     await expect(cp.getMess_error()).toContainText("Invalid credentials")
  39 | 
  40 | })
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
```