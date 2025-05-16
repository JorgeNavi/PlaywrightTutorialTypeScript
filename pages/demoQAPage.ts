import { Page } from '@playwright/test';
import * as methods from '../utils/methods';


// MARK: Clase "Page" con los pasos que deben realizar los tests

export class DemoQaPage {
  static openAndFillFormInDemoQA(page: Page) {
    throw new Error('Method not implemented.');
  }
  constructor(private page: Page) { }

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
    await methods.pressEsc(this.page);
  }

  async handlingAlertsInDemoQA() {
    await this.openAndFillFormInDemoQA();
    await methods.clickElementCovered(this.page, "//div[@class='header-text' and contains(., 'Alerts, Frame & Windows')]");
    await methods.click(this.page, "//span[text()='Alerts']");
    await methods.click(this.page, "//button[@id='alertButton']");
    await methods.pressEnter(this.page);
    await methods.click(this.page, "//button[@id='timerAlertButton']")
    await this.page.waitForTimeout(6000); //el alerts tarda 5 segundos en aparecer, por eso establecemos una espera de 6
    await methods.pressEnter(this.page);
    await methods.click(this.page, "//button[@id='confirmButton']")
    await methods.pressEnter(this.page);
    await methods.click(this.page, "//button[@id='promtButton']")
    await methods.pressEnter(this.page);
  }

  async fillSeveralFomrsInDemoQA() {
    await this.page.goto('https://demoqa.com');
    await methods.clickElementCovered(this.page, "(//div[@class='card mt-4 top-card'])[1]");
    await methods.clickElementCovered(this.page, "//li[@class='btn btn-light ' and contains(., 'Text Box')]");
    await methods.sendKeys(this.page, "//input[@id='userName']", "Eva tu RRHH favorita");
    await methods.sendKeys(this.page, "//input[@id='userEmail']", "eva@example.com");
    await methods.sendKeys(this.page, "//textarea[@id='currentAddress']", "Vivo en la calle de mi casa obviamente");
    await methods.sendKeys(this.page, "//textarea[@id='permanentAddress']", "De nuevo, en mi casa");
  }

  async checkBoxInDemoQAAfterForms() {
    await this.fillSeveralFomrsInDemoQA();
    await methods.click(this.page, "//li[@class='btn btn-light ' and contains(., 'Check Box')]");
    await methods.click(this.page, "//span[@class='rct-checkbox']");
  }

  async clickRadioButtonAfterCheckBox() {
    await this.checkBoxInDemoQAAfterForms();
    await methods.click(this.page, "//li[@class='btn btn-light ' and contains(., 'Radio Button')]");
    await methods.click(this.page, "//label[@for='impressiveRadio']");
  }

  async createRecordInWebTable() {
    await this.page.goto('https://demoqa.com');
    await methods.clickElementCovered(this.page, "(//div[@class='card mt-4 top-card'])[1]");
    await methods.clickElementCovered(this.page, "//li[@class='btn btn-light ' and contains(., 'Web Tables')]");
    await methods.click(this.page, "//button[@id='addNewRecordButton']");
    await methods.sendKeys(this.page, "//input[@id='firstName']", "Jorge");
    await methods.sendKeys(this.page, "//input[@id='lastName']", "Moratalla");
    await methods.sendKeys(this.page, "//input[@id='userEmail']", "example@example.com");
    await methods.sendKeys(this.page, "//input[@id='age']", "33");
    await methods.sendKeys(this.page, "//input[@id='salary']", "1000000");
    await methods.sendKeys(this.page, "//input[@id='department']", "QA");
  }

  async updateRecordInWebTable() {
    await this.createRecordInWebTable();
    await methods.pressEnter(this.page);
    await methods.click(this.page, "(//span[@title='Edit'])[4]");
    await methods.sendKeys(this.page, "//input[@id='firstName']", "Eva");
    await methods.sendKeys(this.page, "//input[@id='lastName']", "Bestilleiro");
    await methods.sendKeys(this.page, "//input[@id='userEmail']", "eva@example.com");
    await methods.sendKeys(this.page, "//input[@id='age']", "65");
    await methods.sendKeys(this.page, "//input[@id='salary']", "10");
    await methods.sendKeys(this.page, "//input[@id='department']", "RRHH");
  }

  async deleteRecordInWebTable() {
    await this.updateRecordInWebTable();
    await methods.pressEnter(this.page);
    await methods.click(this.page, "(//span[@title='Delete'])[4]")
  }

  async openFramePage() {
    const pages = this.page.context().pages();

    const original = pages[0];

    await this.page.goto("https://demoqa.com/");
    await methods.click(this.page, "(//div[@class='card mt-4 top-card'])[3]");
    await methods.click(this.page, "//span[text()='Browser Windows']");
    await methods.click(this.page, "//button[@id='tabButton']");
    await original.bringToFront();
    await methods.click(this.page, "//button[@id='windowButton']");
    await methods.click(this.page, "//button[@id='messageWindowButton']");
  }

}