import { Page } from '@playwright/test';

// આ ગ્લોબલ વેબ-પેજ ઓબ્જેક્ટ છે
let page: Page;

/**
 * ટેસ્ટ શરૂ થાય ત્યારે આ ફંક્શન પેજ સેટ કરશે.
 */
export function setPage(p: Page) {
  page = p;
}

/**
 * આખા ફ્રેમવર્કમાં કોઈપણ જગ્યાએ પેજની જરૂર પડે ત્યારે આ ફંક્શનનો ઉપયોગ થશે.
 */
export function getPage(): Page {
  if (!page) {
    throw new Error('Page is not initialized. Please ensure setPage() is called before executing tests.');
  }
  return page;
}
