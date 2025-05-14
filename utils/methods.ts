// utils/methods.ts
import { Page } from '@playwright/test';

// MARK: Fichero donde establecemos nuestros métodos personalizados que modifican/amplian los básicos de Playwright

export async function sendKeys(page: Page, xpath: string, text: string): Promise<void> {
  try {
    const locator = page.locator(`xpath=${xpath}`);
    if (await locator.count() > 0) {
      await locator.fill(text);
    } else {
      console.log(`Element not found for XPath: ${xpath}`);
    }
  } catch (ex: any) {
    console.log(`An error occurred while filling the element: ${ex.message}`);
  }
}

export async function click(page: Page, xpath: string): Promise<void> {
  try {
    await page.locator(`xpath=${xpath}`).click();
  } catch (ex: any) {
    console.log(`An error occurred during click: ${ex.message}`);
  }
}

export async function clickElementCovered(page: Page, xpath: string): Promise<void> {
  try {
    await page.locator(`xpath=${xpath}`).click({ force: true });
  } catch (ex: any) {
    console.log(`An error occurred during ClickCovered: ${ex.message}`);
  }
}

export async function scrollToElement(page: Page, xpath: string): Promise<void> {
  try {
    await page.locator(`xpath=${xpath}`).scrollIntoViewIfNeeded();
  } catch (ex: any) {
    console.log(`An error occurred during ScrollToElement: ${ex.message}`);
  }
}

export async function selectDropdown(page: Page, xpath: string, visibleText: string): Promise<void> {
  try {
    const dropdown = page.locator(`xpath=${xpath}`);
    await dropdown.click();
    await page.locator('div.css-1n7v3ny-option', { hasText: visibleText }).click();
  } catch (ex: any) {
    console.log(`An error occurred during SelectDropdown: ${ex.message}`);
  }
}

export async function selectRadioButton(page: Page, selector: string, isXPath = false): Promise<void> { //Si usamos el xPath, tenemos que marcar true en la llamada del metodo por paramétro
  try {
    const script = isXPath  //si es un XPath,  .evaluate busca el elemento, cogemos el primer resultado,
    //pasamos el evento a true (el del circulo que queremos selccionar) y lanzamos el evento.
      ? `
        const el = document.evaluate("${selector}", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (el) {
          el.checked = true;
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }
      `
      //si es un selector CSS,  .querySelector busca el elemento,
      //pasamos el evento a true (el del circulo que queremos selccionar) y lanzamos el evento.
      : `
        const el = document.querySelector("${selector}");
        if (el) {
          el.checked = true;
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }
      `;
    await page.evaluate(script);
  } catch (ex: any) {
    console.log(`Error selecting radio button: ${ex.message}`);
  }
}

export async function pressEnter(page: Page): Promise<void> {
  try {
    await page.keyboard.press('Enter');
  } catch (ex: any) {
    console.log(`Error pressing Enter: ${ex.message}`);
  }
}

export async function pressEsc(page: Page): Promise<void> {
  try {
    await page.keyboard.press('Escape');
  } catch (ex: any) {
    console.log(`Error pressing Escape: ${ex.message}`);
  }
}
