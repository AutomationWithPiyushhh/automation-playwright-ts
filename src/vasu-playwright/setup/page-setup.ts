import { test as baseTest } from '@playwright/test';
import { setPage } from '../utils/page-utils';

// આપણે Playwright ના મૂળ test ને વાપરીશું
export const test = baseTest;

// મેજિક અહીં છે: 'beforeEach' એટલે દરેક ટેસ્ટ  શરૂ થાય
// એ પહેલા આ કોડ રન થશે અને એકદમ નવું ફ્રેશ પેજ સેટ કરી દેશે.
test.beforeEach(async ({ page }) => {
  setPage(page);
});

export { expect } from '@playwright/test';
