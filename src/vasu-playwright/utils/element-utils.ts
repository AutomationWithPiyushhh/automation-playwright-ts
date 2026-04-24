import { Locator } from '@playwright/test';
import { getPage } from './page-utils';

/**
 * એલિમેન્ટ સ્ક્રીન પર છે કે નહીં તે માત્ર ચેક કરવા (True/False રિટર્ન કરશે, ટેસ્ટ ફેલ નહીં કરે)
 */
export async function isElementVisible(locator: Locator | string): Promise<boolean> {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  return await element.isVisible();
}

/**
 * એલિમેન્ટ ચેકબોક્સ/રેડિયો બટન ટિક (Checked) થયેલું છે કે નહીં તે જાણવા
 */
export async function isElementChecked(locator: Locator | string): Promise<boolean> {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  return await element.isChecked();
}

/**
 * લિસ્ટમાંથી બધા જ ટેક્સ્ટ ભેગા કરીને એરે (Array) તરીકે લાવવા
 * (દા.ત. ડ્રોપડાઉનની બધી વેલ્યુઝ વાંચવા)
 */
export async function getAllTexts(locator: Locator | string): Promise<string[]> {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  return await element.allTextContents();
}

/**
 * કોઈ એલિમેન્ટની અંદર લખેલી વેલ્યુ (Input Value) વાંચવા માટે
 */
export async function getInputValue(locator: Locator | string): Promise<string> {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  return await element.inputValue();
}
