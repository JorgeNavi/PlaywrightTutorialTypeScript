import { test, expect } from '@playwright/test';
import { DemoQaPage } from '../pages/demoQAPage';


test("demoQA_1", async ({ page }) => {
  const demoQa = new DemoQaPage(page); //usar constructor, se instancia la page
  await demoQa.openAndFillFormInDemoQA(); //llamar al método de instancia y se usa el metodo de page directamente

  ///ASERCIONES:

  //Asegurarnos de que el valor del campo nombre corresponde con lo esperado
  const nameValue = await page.locator("//input[@id='firstName']").inputValue();
  expect(nameValue).toBe("Jorge");

  //Asegurarnos de que el valor del campo email no es nulo
  const emailValue = await page.locator("//input[@id='userEmail']").inputValue();
  expect(emailValue).not.toBeNull();

  //Asegurarnos de que el círculo de "Male" está correctamente marcado
  const genderChecked = await page.locator("//input[@id='gender-radio-1']").isChecked();
  expect(genderChecked).toBeTruthy();
});

test("alerts_demoQA", async ({ page }) => {
  const demoQA = new DemoQaPage(page);
  await demoQA.handlingAlertsInDemoQA();

  
});



