import { expect, Locator } from '@playwright/test';
import { getPage } from './page-utils';

/**
 * કોઈ એલિમેન્ટ (જેમ કે બટન કે મેસેજ) સ્ક્રીન પર સ્પષ્ટ દેખાય છે કે નહીં તે ચેક કરવા.
 * જો ન દેખાય તો ટેસ્ટ ફેલ થશે.
 */
export async function expectElementToBeVisible(locator: Locator | string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await expect(element).toBeVisible();
}

/**
 * કોઈ એલિમેન્ટ સ્ક્રીન પરથી ગાયબ થઈ ગયો છે (Hidden) તે ચેક કરવા.
 * દા.ત. લોડિંગ સ્પીનર (Loading spinner) જતું રહ્યું છે કે નહીં.
 */
export async function expectElementToBeHidden(locator: Locator | string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await expect(element).toBeHidden();
}

/**
 * કોઈ એલિમેન્ટમાં બરાબર એ જ લખાણ (Text) છે કે નહીં તે ચેક કરવા.
 * દા.ત. લોગીન કર્યા પછી 'Welcome Piyush' લખેલું આવ્યું કે નહીં.
 */
export async function expectElementToHaveText(locator: Locator | string, text: string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await expect(element).toHaveText(text);
}

/**
 * કોઈ એલિમેન્ટમાં ચોક્કસ શબ્દ સમાયેલો (Contains) છે કે નહીં તે ચેક કરવા.
 */
export async function expectElementToContainText(locator: Locator | string, text: string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await expect(element).toContainText(text);
}

/**
 * સ્ક્રીન પર કોઈ એલિમેન્ટ કેટલી વાર (Count) દેખાય છે તે ચેક કરવા.
 * દા.ત. પેજ પર 6 પ્રોડક્ટ્સ છે કે નહીં.
 */
export async function expectElementCount(locator: Locator | string, count: number) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await expect(element).toHaveCount(count);
}

