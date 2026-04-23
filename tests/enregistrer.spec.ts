import {test,expect} from "@playwright/test"
import { connexionpom } from "../pages/connexionpom.page";
import { AjouterCandidatpom } from "../pages/AjouterCandidatpom.page";
 let cp : connexionpom;
 let Aj :AjouterCandidatpom;

test.beforeEach("setup", async ({page})=>{
    cp = new connexionpom(page);
    Aj = new AjouterCandidatpom(page);
//  Given je visite le site 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     await cp.saisirUsername("Admin");
//     And je saisis le prénom "admin123"
    await cp.saisirPassword("admin123");
//     And  je click sur le bouton login
    await cp.clickLogin();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


})
// Scenario: Ajouter candidat
test("Ajouter candidat",{tag:"@ajouter"},async({page})=>{
//     When je click sur le bouton recruitment
    await Aj.clickRecruitment();
//     And je click sur le bouton Candidates
    await expect(Aj.getbtnCandidat()).toBeVisible();
//     And je click sur le bouton Add
    await Aj.clickAdd();

// // lorsque j'utilise cette methode ca me genere des erreurs lors de l'exécution du test 
//     And je remplie le champs First Name
//     await Aj.saisirFirstName("Alex")
// //     And  je rempise le champs Midlle name
//     await Aj.saisirMiddleName("bruno")
// //     And je remple le champs Last Name
//     await Aj.saisirLastName("Test")
// //     And je remplie le champs Email
//     await Aj.saisirEmail("test@gmail.com")

//  Appeller la methode infoCandidat pour remplir les champs precédent pour rendre notre code plus court
 await Aj.infoCandidat("Alex","Anis","Test","test@gmail.com");
//     And je click sur le bouton Save
    await Aj.clickSave();
//     Then s'affiche la page  contenant le bouton  Application Stage
    await expect(Aj.getAppStage()).toBeVisible()
    // En perspective , on va faire l'assertion afin de voir si le bouton candidat profile est visible
    // await expect(Aj.getCandProfile()).toBeVisible();

})