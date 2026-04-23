import {test,expect} from "@playwright/test"
import { connexionpom } from "../pages/connexionpom.page";

 let cp : connexionpom;
 

test.beforeEach("setup", async ({page})=>{
    cp = new connexionpom(page);
//  Given je visite le site 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})


//   Scenario: connexion identifiant valide
test("connexion identifiant valide",{tag:"@idvalide"},async({page})=>{
//     When je saisis le Username "Admin"
    await cp.saisirUsername("Admin");
//     And je saisis le prénom "admin123"
    await cp.saisirPassword("admin123");
//     And  je click sur le bouton login
    await cp.clickLogin();
    //Then je suis rediriger sur page d'acceuil ayant pour url"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //  expect(Aj.getUpgrade()).toBeVisible();    le test passe juste sur un site (safarie)
    //  expect(Aj.getMyFirstname()).toBeVisible();

})
  
//     Scenario: connection identifiant invalide
test("connexion identifiant ",{tag:"@idinvalide"}, async()=>{
//     When je saisis le Username "Admin1"
    await cp.saisirUsername("Admin1");
//     And je saisis le prénom "admin1234"
    await cp.saisirPassword("admin1234");
//     And  je click sur le bouton login
    await cp.clickLogin();
//     Then message s'affiche " Invalid credentials"
    await expect(cp.getMess_error()).toBeVisible()

})




