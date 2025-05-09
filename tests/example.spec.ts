import { test, expect } from '@playwright/test';
import { DemoQaPage } from '../pages/demoQAPage';


test("demoQA_1", async ({ page }) => {
  const demoQa = new DemoQaPage(page); // ← usar constructor, se instancia la page
  await demoQa.openAndFillFormInDemoQA(); // ← llamar al método de instancia y se usa el metodo de page directamente

  const nameValue = await page.locator("//input[@id='firstName']").inputValue();
  expect(nameValue).toBe("Jorge");

  const emailValue = await page.locator("//input[@id='userEmail']").inputValue();
  expect(emailValue).not.toBeNull();

  const genderChecked = await page.locator("//input[@id='gender-radio-1']").isChecked();
  expect(genderChecked).toBeTruthy();
});



