import { test, expect } from '@playwright/test';
import { DemoQaPage } from '../pages/demoQAPage';

// MARK: TESTS


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

test("severalFomra_demoQA", async ({ page }) => {
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
  const currentAddressValue = await page.locator("//textarea[@id='currentAddress']").inputValue();
  expect(currentAddressValue).not.toBeNull();
  expect(currentAddressValue).toBe("Vivo en la calle de mi casa obviamente");

  //Asegurarnos de que el valor del campo currentAdress no es nulo y corresponde con lo esperado
  const permanentAddressValue = await page.locator("//textarea[@id='permanentAddress']").inputValue();
  expect(permanentAddressValue).not.toBeNull();
  expect(permanentAddressValue).toBe("De nuevo, en mi casa");

});

test("checkBox_demoQA", async ({ page }) => {

  const demoQa = new DemoQaPage(page);
  await demoQa.checkBoxInDemoQAAfterForms();

  ///ASERCIONES:

  //Comprobar que la caja está seleccionada:
  const boxIsChecked = await page.locator("//span[@class='rct-checkbox']").isChecked();
  expect(boxIsChecked).toBe(true);

});

test("radioButton_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.clickRadioButtonAfterCheckBox();

  //ASERCIONES:

  //Comporbar que el botón redondeado está seleccionado:
  const isChecked = await page.locator("//label[@for='impressiveRadio']").isChecked();
  expect(isChecked).toBe(true);
});

test("createRecordWebTable_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.createRecordInWebTable();

  ///ASERCIONES:

  //Comporbamos que el campo nombre no es nulo y se rellena con los datos corrextos
  const nameValue = await page.locator("//input[@id='firstName']").inputValue();
  expect(nameValue).not.toBe(null);
  expect(nameValue).toBe("Jorge");

  //Comporbamos que el campo apellido no es nulo y se rellena con los datos corrextos
  const lastNameValue = await page.locator("//input[@id='lastName']").inputValue();
  expect(lastNameValue).not.toBe(null);
  expect(lastNameValue).toBe("Moratalla");

  //Comporbamos que el campo email no es nulo y se rellena con los datos corrextos
  const emailValue = await page.locator("//input[@id='userEmail']").inputValue();
  expect(emailValue).not.toBe(null);
  expect(emailValue).toBe("example@example.com");

  //Comporbamos que el edad email no es nulo y se rellena con los datos corrextos
  const ageValue = await page.locator("//input[@id='age']").inputValue();
  expect(ageValue).not.toBe(null);
  expect(ageValue).toBe("33");

  //Comporbamos que el campo salario no es nulo y se rellena con los datos corrextos
  const salaryValue = await page.locator("//input[@id='salary']").inputValue();
  expect(salaryValue).not.toBe(null);
  expect(salaryValue).toBe("1000000");

  //Comporbamos que el campo departamento no es nulo y se rellena con los datos corrextos
  const departmentValue = await page.locator("//input[@id='department']").inputValue();
  expect(departmentValue).not.toBe(null);
  expect(departmentValue).toBe("QA");
});

test("updateRecordWebTable_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.updateRecordInWebTable();

  ///ASERCIONES:

  //Comporbamos que el campo nombre no es nulo y se rellena con los datos corrextos
  const nameValue = await page.locator("//input[@id='firstName']").inputValue();
  expect(nameValue).not.toBe(null);
  expect(nameValue).toBe("Eva");

  //Comporbamos que el campo apellido no es nulo y se rellena con los datos corrextos
  const lastNameValue = await page.locator("//input[@id='lastName']").inputValue();
  expect(lastNameValue).not.toBe(null);
  expect(lastNameValue).toBe("Bestilleiro");

  //Comporbamos que el campo email no es nulo y se rellena con los datos corrextos
  const emailValue = await page.locator("//input[@id='userEmail']").inputValue();
  expect(emailValue).not.toBe(null);
  expect(emailValue).toBe("eva@example.com");

  //Comporbamos que el edad email no es nulo y se rellena con los datos corrextos
  const ageValue = await page.locator("//input[@id='age']").inputValue();
  expect(ageValue).not.toBe(null);
  expect(ageValue).toBe("65");

  //Comporbamos que el campo salario no es nulo y se rellena con los datos corrextos
  const salaryValue = await page.locator("//input[@id='salary']").inputValue();
  expect(salaryValue).not.toBe(null);
  expect(salaryValue).toBe("10");

  //Comporbamos que el campo departamento no es nulo y se rellena con los datos corrextos
  const departmentValue = await page.locator("//input[@id='department']").inputValue();
  expect(departmentValue).not.toBe(null);
  expect(departmentValue).toBe("RRHH");
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

test("openFramePage_demoQA", async ({ page }) => {

  const demoQA = new DemoQaPage(page);
  await demoQA.openFramePage();

  
  ///ASERCIONES:

  // Recogemos todas las páginas/ventanas abiertas
  const pages = page.context().pages();

  //Comprobamos si se abre Browser Windows
  const original = pages[0];
  await expect(original).toHaveURL('https://demoqa.com/browser-windows');

  //Comprobamos si se abre el tabButton
  const tabPage = pages[1];
  await expect(tabPage).toHaveURL('https://demoqa.com/sample');
  await expect(tabPage.locator('h1')).toHaveText('This is a sample page');

  //Comprobamos si se abre el new Window
  const windowPage = pages[2];
  await expect(windowPage).toHaveURL('https://demoqa.com/sample');
  await expect(windowPage.locator('h1')).toHaveText('This is a sample page');

  //Comprobamos si se abre el new Window Message
  // Validamos su contenido de <body>
  const messagePage = pages[3];
  await expect(messagePage.locator('body')).toContainText(
    'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.'
  );

});


