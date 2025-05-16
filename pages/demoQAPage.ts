import { Page } from '@playwright/test';
import * as methods from '../utils/methods';
import { Locators } from '../utils/locators';


// MARK: Clase "Page" con los pasos que deben realizar los tests

export class DemoQaPage {
  static openAndFillFormInDemoQA(page: Page) {
    throw new Error('Method not implemented.');
  }
  constructor(private page: Page) { }

  async openAndFillFormInDemoQA() {
    await this.page.goto(Locators.demoQaUrl);
    await methods.click(this.page, Locators.greatLabelForm);
    await methods.click(this.page, Locators.practiceFormLabel);
    await methods.sendKeys(this.page, Locators.userFirstName, "Jorge"); 
    await methods.sendKeys(this.page, Locators.userLastName, "Moratalla");
    await methods.sendKeys(this.page, Locators.userEmail, "example@example.com");
    await methods.selectRadioButton(this.page, Locators.genderRadioButton, true);
    await methods.sendKeys(this.page, Locators.userMobileNumber, "6234578895");
    await methods.sendKeys(this.page, Locators.userDateBirth, "11/11/2011");
    await methods.pressEnter(this.page);
    await methods.selectRadioButton(this.page, Locators.userHobbiesRead, true);
    await methods.click(this.page, Locators.submitButton);
    await methods.pressEsc(this.page);
  }

  async handlingAlertsInDemoQA() {
    await this.openAndFillFormInDemoQA();
    await methods.clickElementCovered(this.page, Locators.greatLabelAlerts);
    await methods.click(this.page, Locators.alertsLabel);
    await methods.click(this.page, Locators.firstAlertButton);
    await methods.pressEnter(this.page);
    await methods.click(this.page, Locators.timerAlertButton);
    await this.page.waitForTimeout(6000); //el alerts tarda 5 segundos en aparecer, por eso establecemos una espera de 6
    await methods.pressEnter(this.page);
    await methods.click(this.page, Locators.confirmAlertButton);
    await methods.pressEnter(this.page);
    await methods.click(this.page, Locators.promptAlertButton);
    await methods.pressEnter(this.page);
  }

  async fillSeveralFomrsInDemoQA() {
    await this.page.goto(Locators.demoQaUrl);
    await methods.clickElementCovered(this.page, Locators.greatLabelElements);
    await methods.clickElementCovered(this.page, Locators.textBoxButton);
    await methods.sendKeys(this.page, Locators.userFullName, "Eva tu RRHH favorita");
    await methods.sendKeys(this.page, Locators.userEmail, "eva@example.com");
    await methods.sendKeys(this.page, Locators.userCurrentAddress, "Vivo en la calle de mi casa obviamente");
    await methods.sendKeys(this.page, Locators.userPermanentAddress, "De nuevo, en mi casa");
  }

  async checkBoxInDemoQAAfterForms() {
    await this.fillSeveralFomrsInDemoQA();
    await methods.click(this.page, Locators.checkBoxLabel);
    await methods.click(this.page, Locators.checkBoxCircle);
  }

  async clickRadioButtonAfterCheckBox() {
    await this.checkBoxInDemoQAAfterForms();
    await methods.click(this.page, Locators.radioButton);
    await methods.click(this.page, Locators.impressiveLabel);
  }

  async createRecordInWebTable() {
    await this.page.goto(Locators.demoQaUrl);
    await methods.clickElementCovered(this.page, Locators.greatLabelElements);
    await methods.clickElementCovered(this.page, Locators.greatLabelWebTables);
    await methods.click(this.page, Locators.newRecordButton);
    await methods.sendKeys(this.page, Locators.userFirstName, "Jorge");
    await methods.sendKeys(this.page, Locators.userLastName, "Moratalla");
    await methods.sendKeys(this.page, Locators.userEmail, "example@example.com");
    await methods.sendKeys(this.page, Locators.userAge, "33");
    await methods.sendKeys(this.page, Locators.userSalary, "1000000");
    await methods.sendKeys(this.page, Locators.userDepartment, "QA");
  }

  async updateRecordInWebTable() {
    await this.createRecordInWebTable();
    await methods.pressEnter(this.page);
    await methods.click(this.page, Locators.editRecordButton);
    await methods.sendKeys(this.page, Locators.userFirstName, "Eva");
    await methods.sendKeys(this.page, Locators.userLastName, "Bestilleiro");
    await methods.sendKeys(this.page, Locators.userEmail, "eva@example.com");
    await methods.sendKeys(this.page, Locators.userAge, "65");
    await methods.sendKeys(this.page, Locators.userSalary, "10");
    await methods.sendKeys(this.page, Locators.userDepartment, "RRHH");
  }

  async deleteRecordInWebTable() {
    await this.updateRecordInWebTable();
    await methods.pressEnter(this.page);
    await methods.click(this.page, Locators.deleteRecordButton)
  }

  async openFramePage() {
    const pages = this.page.context().pages();

    const original = pages[0];

    await this.page.goto(Locators.demoQaUrl);
    await methods.click(this.page, "(//div[@class='card mt-4 top-card'])[3]");
    await methods.click(this.page, "//span[text()='Browser Windows']");
    await methods.click(this.page, "//button[@id='tabButton']");
    await original.bringToFront();
    await methods.click(this.page, "//button[@id='windowButton']");
    await methods.click(this.page, "//button[@id='messageWindowButton']");
  }

}