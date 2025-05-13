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

test("severalFomra_demoQA", async ({ page }) =>{
  const demoQa = new DemoQaPage(page);
  await demoQa.fillSeveralFomrsInDemoQA();

  ///ASERCIONES:

  //Asegurarnos de que el valor del campo nombre corresponde con lo esperado
  const nameValue = await page.locator("//input[@id='userName']").inputValue();
  expect(nameValue).toBe("Eva tu RRHH favorita")

  //Asegurarnos de que el valor del campo email no es nulo y corresponde con lo esperado
  const emailValue = await page.locator("//input[@id='userEmail']").inputValue();
  expect(emailValue).not.toBeNull();
  expect(emailValue).toBe("eva@example.com");

  //Asegurarnos de que el valor del campo currentAdress no es nulo y corresponde con lo esperado
  const currentAddressValue = await page.locator("//textarea[@id='currentAddress']");
  expect(currentAddressValue).not.toBeNull();
  expect(currentAddressValue).toBe("Vivo en la calle de mi casa obviamente");

  //Asegurarnos de que el valor del campo currentAdress no es nulo y corresponde con lo esperado
  const permanentAddressValue = await page.locator("//textarea[@id='permanentAddress']");
  expect(permanentAddressValue).not.toBeNull();
  expect(permanentAddressValue).toBe("De nuevo, en mi casa");

});




