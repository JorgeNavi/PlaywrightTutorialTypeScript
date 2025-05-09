import { Page } from '@playwright/test';
import * as methods from '../utils/methods';

export class DemoQaPage {
  static openAndFillFormInDemoQA(page: Page) {
    throw new Error('Method not implemented.');
  }
  constructor(private page: Page) {}

  async openAndFillFormInDemoQA() {
    await this.page.goto('https://demoqa.com');
    await methods.click(this.page, "//div[contains(@class, 'card-body')]/h5[text()='Forms']");
    await methods.click(this.page, "//span[text()='Practice Form']");
    await methods.sendKeys(this.page, "//input[@id='firstName']", "Jorge");
    await methods.sendKeys(this.page, "//input[@id='lastName']", "Moratalla");
    await methods.sendKeys(this.page, "//input[@id='userEmail']", "example@example.com");
    await methods.selectRadioButton(this.page, "//input[@id='gender-radio-1']", true);
    await methods.sendKeys(this.page, "//input[@id='userNumber']", "6234578895");
    await methods.sendKeys(this.page, "//input[@id='dateOfBirthInput']", "11/11/2011");
    await methods.pressEnter(this.page);
    await methods.selectRadioButton(this.page, "//input[@id='hobbies-checkbox-2']", true);
    await methods.click(this.page, "//button[@id='submit']");
  }
}