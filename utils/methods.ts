import { Frame, Page, test } from '@playwright/test';

// MARK: Fichero donde establecemos nuestros métodos personalizados que modifican/amplian los básicos de Playwright

export async function sendKeys(page: Page, xpath: string, text: string): Promise<void> {
  await test.step(`Enviar texto "${text}" en el elemento con XPath: ${xpath}`, async () => {
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
  });
}

export async function click(page: Page, xpath: string): Promise<void> {
  await test.step(`Hacer click en el elemento con XPath: ${xpath}`, async () => {
    try {
      await page.locator(`xpath=${xpath}`).click();
    } catch (ex: any) {
      console.log(`An error occurred during click: ${ex.message}`);
    }
  });
}

export async function clickElementCovered(page: Page, xpath: string): Promise<void> {
  await test.step(`Hacer click forzado en el elemento con XPath: ${xpath}`, async () => {
    try {
      await page.locator(`xpath=${xpath}`).click({ force: true });
    } catch (ex: any) {
      console.log(`An error occurred during ClickCovered: ${ex.message}`);
    }
  });
}

export async function scrollToElement(page: Page, xpath: string): Promise<void> {
  await test.step(`Hacer scroll hasta el elemento con XPath: ${xpath}`, async () => {
    try {
      await page.locator(`xpath=${xpath}`).scrollIntoViewIfNeeded();
    } catch (ex: any) {
      console.log(`An error occurred during ScrollToElement: ${ex.message}`);
    }
  });
}

export async function selectDropdown(page: Page, xpath: string, visibleText: string): Promise<void> {
  await test.step(`Seleccionar la opción "${visibleText}" en el dropdown con XPath: ${xpath}`, async () => {
    try {
      const dropdown = page.locator(`xpath=${xpath}`);
      await dropdown.click();
      await page.locator('div.css-1n7v3ny-option', { hasText: visibleText }).click();
    } catch (ex: any) {
      console.log(`An error occurred during SelectDropdown: ${ex.message}`);
    }
  });
}

export async function selectRadioButton(page: Page, selector: string, isXPath = false): Promise<void> {
  await test.step(`Seleccionar radio button usando ${isXPath ? 'XPath' : 'CSS'}: ${selector}`, async () => {
    try {
      const script = isXPath
        ? `
          const el = document.evaluate("${selector}", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (el) {
            el.checked = true;
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }
        `
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
  });
}

export async function pressEnter(page: Page): Promise<void> {
  await test.step('Presionar tecla Enter', async () => {
    try {
      await page.keyboard.press('Enter');
    } catch (ex: any) {
      console.log(`Error pressing Enter: ${ex.message}`);
    }
  });
}

export async function pressEsc(page: Page): Promise<void> {
  await test.step('Presionar tecla Escape', async () => {
    try {
      await page.keyboard.press('Escape');
    } catch (ex: any) {
      console.log(`Error pressing Escape: ${ex.message}`);
    }
  });
}

export async function switchToIframe(page: Page, xpath: string): Promise<Frame> {
  return await test.step(`Cambiar al iframe con XPath: ${xpath}`, async () => {
    try {
      const iframeElement = await page.waitForSelector(`xpath=${xpath}`, { timeout: 5000 });
      const frame = await iframeElement.contentFrame();

      if (!frame) {
        throw new Error(`No se pudo obtener el contenido del iframe con XPath: ${xpath}`);
      }

      return frame;
    } catch (error) {
      throw new Error(`Error al cambiar al iframe con XPath ${xpath}: ${String(error)}`);
    }
  });
}