import { test, expect } from '@playwright/test';
import { DemoQaPage } from '../pages/demoQAPage';
import { Assertions } from '../utils/assertions';

// MARK: TESTS

const assertions = new Assertions();


test("demoQA_1", async ({ page }) => {
  const demoQa = new DemoQaPage(page); //usar constructor, se instancia la page
  await demoQa.openAndFillFormInDemoQA(); //llamar al método de instancia y se usa el metodo de page directamente

  ///ASERCIONES:

  //Asegurarnos de que el valor del campo nombre corresponde con lo esperado
  assertions.inputValue(page, "//input[@id='firstName']", "Jorge");

  assertions.inputValue(page, "//input[@id='lastName']", "Moratalla");

  //Asegurarnos de que el valor del campo email no es nulo
  assertions.inputValue(page, "//input[@id='userEmail']", "example@example.com");

  //Asegurarnos de que el círculo de "Male" está correctamente marcado
  assertions.isChecked(page, "//input[@id='gender-radio-1']");
});

test("alerts_demoQA", async ({ page }) => {
  const demoQA = new DemoQaPage(page);
  await demoQA.handlingAlertsInDemoQA();
});

test("severalFomra_demoQA", async ({ page }) => {
  const demoQa = new DemoQaPage(page);
  await demoQa.fillSeveralFomrsInDemoQA();

  ///ASERCIONES:

  //Asegurarnos de que el valor del campo contiene una palabrs que sabemos que debe incluir
  assertions.containsText(page, "//input[@id='userName']", "RRHH");

  //Asegurarnos de que el valor del campo email no es nulo y corresponde con lo esperado
  assertions.inputValue(page, "//input[@id='userEmail']", "eva@example.com");

  //Asegurarnos de que el valor del campo currentAdress no es nulo y corresponde con lo esperado
  assertions.inputValue(page, "//textarea[@id='currentAddress']", "Vivo en la calle de mi casa obviamente");

  //Asegurarnos de que el valor del campo currentAdress no es nulo y corresponde con lo esperado
  assertions.inputValue(page, "//textarea[@id='permanentAddress']", "De nuevo, en mi casa");
});

test("checkBox_demoQA", async ({ page }) => {
  const demoQa = new DemoQaPage(page);
  await demoQa.checkBoxInDemoQAAfterForms();

  ///ASERCIONES:

  //Comprobar que la caja está seleccionada:
  assertions.isChecked(page, "//span[@class='rct-checkbox']");
});

test("radioButton_demoQA", async ({ page }) => {
  const demoQA = new DemoQaPage(page);
  await demoQA.clickRadioButtonAfterCheckBox();

  //ASERCIONES:

  //Comporbar que el botón redondeado está seleccionado:
  assertions.isChecked(page, "//label[@for='impressiveRadio']");
});

test("createRecordWebTable_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.createRecordInWebTable();

  ///ASERCIONES:

  //Comporbamos que el campo nombre no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='firstName']", "Jorge");

  //Comporbamos que el campo apellido no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='lastName']", "Moratalla");

  //Comporbamos que el campo email no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='userEmail']", "example@example.com");

  //Comporbamos que el edad email no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='age']", "33");

  //Comporbamos que el campo salario no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='salary']", "1000000");

  //Comporbamos que el campo departamento no es nulo y se rellena con los datos corrextos
  assertions.inputValue(page, "//input[@id='department']", "QA");
});

test("updateRecordWebTable_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.updateRecordInWebTable();

  ///ASERCIONES:

  //Comporbamos que el campo nombre no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='firstName']", "Eva");

  //Comporbamos que el campo apellido no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='lastName']", "Bestilleiro");

  //Comporbamos que el campo email no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='userEmail']", "eva@example.com");

  //Comporbamos que el edad email no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='age']", "65");

  //Comporbamos que el campo salario no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='salary']", "10");

  //Comporbamos que el campo departamento no es nulo y se rellena con los datos correctos
  assertions.inputValue(page, "//input[@id='department']", "RRHH");
});

test("deleteRecordWebTable_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.deleteRecordInWebTable();

});


// MARK: Este test está realizado con la funcionalidad de "grabación". Comando: npx playwright codegen https://demoqa.com
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Text Box').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Jorge');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('jorge');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('jorge.navidad');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('mi casa');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('tambien');
  await page.getByRole('button', { name: 'Submit' }).click();
});

/*test("openFramePage_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.openFramePage();

  
  ///ASERCIONES:

  // Recogemos todas las páginas/ventanas abiertas
  const pages = page.context().pages();

  assertions.toHaveURL(pages[0], 'https://demoqa.com/browser-windows');

  assertions.toHaveURL(pages[1], 'https://demoqa.com/sample');

});*/


