import { click, clickAndNavigate, fill, gotoURL } from '@ActionUtils';
import { failureLoginCredentials, successLoginCredentials } from '../../../testdata/sauce-demo-test-data';
import { expectElementToBeVisible } from '@AssertUtils';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from '@LocatorUtils';
import { expectElementToHaveText } from '@AssertUtils';

// 1. Locators (વેબસાઈટના એલિમેન્ટ્સ)
const userName = `#user-name`;
const password = () => getLocator(`#password`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;

// 2. Actions (પેજ પર કરવાના કામ)
export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName, successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login()); // આ ઓટોમેટિક નવા પેજની રાહ જોશે!
}

export async function failureLogin() {
  await fill(userName, failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

// 3. Assertions (ચેકિંગ)
export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function verifyLoginPageisDisplayed() {
  await expectElementToBeVisible(userName);
}

// Actions સેક્શનમાં આ નવું ફંક્શન ઉમેરો (ડાયનેમિક લોગીન માટે):
export async function loginWithCredentials(user: string, pass: string) {
  await fill(userName, user);
  await fill(password(), pass);
  await click(login());
}

// Assertions સેક્શનમાં આ નવું ફંક્શન ઉમેરો (ચોક્કસ એરર મેસેજ ચેક કરવા માટે):
export async function verifyExactErrorMessage(expectedMessage: string) {
  await expectElementToHaveText(errorMessage, expectedMessage);
}