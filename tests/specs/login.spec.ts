import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/preferred-pom/sauce-demo-login-page';
import { invalidLoginCredentials, successLoginCredentials, failureLoginCredentials } from '../../testdata/sauce-demo-test-data';
import * as ProductsPage from 'tests/pages/preferred-pom/sauce-demo-products-page';

test.describe('Login Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        await LoginPage.navigateToSauceDemoLoginPage();
    });

    test('TC_01: Verify successful login with valid credentials', async ({ page }) => {
        await LoginPage.loginWithCredentials(successLoginCredentials.username, successLoginCredentials.password);
        await ProductsPage.verifyProductsPageDisplayed();
    });

    test('TC_02: Verify error message with locked_out_user', async ({ page }) => {
        await LoginPage.loginWithCredentials(failureLoginCredentials.username, failureLoginCredentials.password);
        await LoginPage.verifyExactErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

    test('TC_03: Verify error with invalid username and valid password', async ({ page }) => {
        await LoginPage.loginWithCredentials(invalidLoginCredentials.username, successLoginCredentials.password);
        await LoginPage.verifyExactErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    test('TC_04: Verify error with valid username and invalid password', async ({ page }) => {
        await LoginPage.loginWithCredentials(successLoginCredentials.username, invalidLoginCredentials.password);
        await LoginPage.verifyExactErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    test('TC_05: Verify error when username and password fields are left blank', async ({ page }) => {
        await LoginPage.loginWithCredentials('', '');
        await LoginPage.verifyExactErrorMessage('Epic sadface: Username is required');
    });

});