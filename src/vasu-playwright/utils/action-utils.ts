import { Locator } from '@playwright/test';
import { getPage } from './page-utils';

/**
 * કોઈ ચોક્કસ URL પર જવા માટે આ ફંક્શનનો ઉપયોગ થશે.
 * આ ફંક્શન પેજ પૂરેપૂરું લોડ થાય (domcontentloaded) ત્યાં સુધી રાહ જોશે.
 */
export async function gotoURL(url: string) {
  await getPage().goto(url, { waitUntil: 'domcontentloaded' });
}

/**
 * કોઈપણ બટન, લિંક કે ચેકબોક્સ પર ક્લિક કરવા માટે.
 * જ્યારે ક્લિક કર્યા પછી નવું પેજ ખુલતું ન હોય (Ajax કોલ હોય), ત્યારે આ વાપરવું.
 */
export async function click(locator: Locator | string) {
  // જો યુઝર સીધું string (જેમ કે '#login') પાસ કરે, તો તેને Locator માં કન્વર્ટ કરશે
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await element.click();
}

/**
 * જ્યારે કોઈ બટન પર ક્લિક કરવાથી નવું પેજ ખુલવાનું હોય (Navigation થતું હોય),
 * ત્યારે આ ફંક્શન વાપરવું. આ ફંક્શન ક્લિક કરશે અને નવું પેજ લોડ થાય ત્યાં સુધી ઓટોમેટિક રાહ જોશે.
 */
export async function clickAndNavigate(locator: Locator | string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;

  // Promise.all એ સુનિશ્ચિત કરે છે કે ક્લિક થયા પછી પેજ લોડ થવાની રાહ જોવાય
  await Promise.all([getPage().waitForNavigation({ waitUntil: 'domcontentloaded' }), element.click()]);
}

/**
 * ટેક્સ્ટ બોક્સ (Textbox) માં કંઈક લખવા માટે.
 */
export async function fill(locator: Locator | string, text: string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await element.fill(text);
}

/**
 * કીબોર્ડ પરથી કી દબાવવા માટે (જેમ કે 'Enter' અથવા 'Tab').
 */
export async function pressKey(locator: Locator | string, key: string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await element.press(key);
}


/**
 * ડ્રોપડાઉન (Select tag) માંથી કોઈ ઓપ્શન સિલેક્ટ કરવા માટે.
 */
export async function selectOption(locator: Locator | string, value: string) {
  const element = typeof locator === 'string' ? getPage().locator(locator) : locator;
  await element.selectOption(value);
}