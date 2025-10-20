
import { expect, Page } from '@playwright/test';

export class Assertions {

    async inputValue(page: Page, xpath: string, expectedValue: string) {
        try {
            const currentValue = await page.locator(`xpath=${xpath}`).inputValue();
            expect(currentValue).not.toBe(null);
            expect(currentValue).toBe(expectedValue);
        } catch (ex: any) {
            console.log(`assertion inputValue failure: ${ex.message}`);
            throw ex;
        }

    }

    async isChecked(page: Page, xpath: string) {
        try {
            const isChecked = await page.locator(`xpath=${xpath}`).isChecked();
            expect(isChecked).toBeTruthy();
        } catch (ex: any) {
            console.log(`assertion isChecked failure: ${ex.message}`);
            throw ex;
        }
    }

    async containsText(page: Page, xpath: string, value: string) {
        try {
            const textCointained = await page.locator(`xpath=${xpath}`).inputValue();
            expect(textCointained).toContain(value);
        } catch (ex: any) {
            console.log(`assertion containText failure: ${ex.message}`);
            throw ex;
        }
    }

    async newTabContainsTitle(page: Page, url: string, value: string) {
        const title = await page.title();
        try {
            await expect(page).toHaveURL(url);
            expect(title).toContain(value);
        } catch (ex: any) {
            console.log(`assertion newTabContansTitle failure: ${ex.message}`);
            throw ex;
        }
    }

    async toHaveURL(page: Page, url: string) {
        try {
            await expect(page).toHaveURL(url);
        } catch (ex: any) {
            console.log(`assertion toHaveURL failure: ${ex.message}`);
            throw ex;
        }
    }
}



