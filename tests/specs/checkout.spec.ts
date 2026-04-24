import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/preferred-pom/sauce-demo-login-page';
import * as ProductsPage from 'tests/pages/preferred-pom/sauce-demo-products-page';
import * as MiniCart from 'tests/pages/preferred-pom/sauce-demo-mini-cart';
import * as CartPage from 'tests/pages/preferred-pom/sauce-demo-cart-page';
import * as CheckoutPage from 'tests/pages/preferred-pom/sauce-demo-checkout-page';
import { successLoginCredentials } from '../../testdata/sauce-demo-test-data';

test.describe('Checkout Journey Module Tests', () => {

    // દરેક ટેસ્ટ પહેલા: લોગીન કરો -> પ્રોડક્ટ એડ કરો -> કાર્ટમાં જાવ -> ચેકઆઉટ પર ક્લિક કરો
    test.beforeEach(async ({ page }) => {
        await LoginPage.navigateToSauceDemoLoginPage();
        await LoginPage.loginWithCredentials(successLoginCredentials.username, successLoginCredentials.password);
        await ProductsPage.addToCartByProductNumber(1);
        await MiniCart.clickOnMiniCart();
        await CartPage.clickCheckout();
    });

    test('TC_18: Verify user cannot proceed with empty information', async ({ page }) => {
        // ખાલી ડેટા મોકલીને એરર ચેક કરો
        await CheckoutPage.fillCheckoutInfo('', '', '');
        await CheckoutPage.clickContinue();
        await CheckoutPage.verifyErrorMessage('Error: First Name is required');
    });

    test('TC_19: Verify Checkout Overview displays pricing details', async ({ page }) => {
        // સાચી વિગતો ભરો
        await CheckoutPage.fillCheckoutInfo('Piyush', 'Baldaniya', '201301');
        await CheckoutPage.clickContinue();

        // ઓવરવ્યૂ પેજ અને પ્રાઇસ લેબલ્સ દેખાય છે કે નહીં તે ચેક કરો
        await CheckoutPage.verifyOverviewPageDisplayed();
        await CheckoutPage.verifyPricingLabelsVisible();
    });

    test('TC_20: Verify complete successful checkout journey (End-to-End)', async ({ page }) => {
        // 1. ઇન્ફોર્મેશન ભરો
        await CheckoutPage.fillCheckoutInfo('Piyush', 'Baldaniya', '201301');
        await CheckoutPage.clickContinue();

        // 2. ઓર્ડર ફિનિશ કરો
        await CheckoutPage.clickFinish();

        // 3. સક્સેસ મેસેજ ચેક કરો
        await CheckoutPage.verifyOrderSuccessMessage();

        // 4. પાછા હોમ પેજ પર આવો
        await CheckoutPage.clickBackHome();
        await ProductsPage.verifyProductsPageDisplayed();
    });

});