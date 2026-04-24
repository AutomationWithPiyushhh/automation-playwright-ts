import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/preferred-pom/sauce-demo-login-page';
import * as ProductsPage from 'tests/pages/preferred-pom/sauce-demo-products-page';
import * as MiniCart from 'tests/pages/preferred-pom/sauce-demo-mini-cart';
import * as CartPage from 'tests/pages/preferred-pom/sauce-demo-cart-page';
import { successLoginCredentials } from '../../testdata/sauce-demo-test-data';

test.describe('Shopping Cart Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        await LoginPage.navigateToSauceDemoLoginPage();
        await LoginPage.loginWithCredentials(successLoginCredentials.username, successLoginCredentials.password);
    });

    test('TC_15: Verify cart badge count increases incrementally', async ({ page }) => {
        // પહેલી પ્રોડક્ટ એડ કરો અને કાઉન્ટ ચેક કરો
        await ProductsPage.addToCartByProductNumber(1);
        await MiniCart.verifyMiniCartCount('1');

        // બીજી પ્રોડક્ટ એડ કરો અને કાઉન્ટ ચેક કરો
        await ProductsPage.addToCartByProductNumber(2);
        await MiniCart.verifyMiniCartCount('2');
    });

    test('TC_16: Verify removing a product decreases the cart badge count', async ({ page }) => {
        // 2 પ્રોડક્ટ એડ કરો
        await ProductsPage.addToCartByProductNumber(1);
        await ProductsPage.addToCartByProductNumber(2);
        await MiniCart.verifyMiniCartCount('2');

        // પહેલી પ્રોડક્ટ રીમુવ કરો (એ જ બટન પર ફરી ક્લિક કરવાથી રીમુવ થશે)
        await ProductsPage.addToCartByProductNumber(1);

        // હવે કાઉન્ટ ઘટીને 1 થઈ જવું જોઈએ
        await MiniCart.verifyMiniCartCount('1');
    });

    test('TC_17: Verify added product details match exactly on the Cart Page', async ({ page }) => {
        // પ્રોડક્ટ પેજ પરથી 1લી પ્રોડક્ટનું નામ અને ભાવ સાચવી લો
        const expectedName = await ProductsPage.getProductName(1);
        const expectedPrice = await ProductsPage.getProductPrice(1);

        // પ્રોડક્ટને કાર્ટમાં નાખો
        await ProductsPage.addToCartByProductNumber(1);

        // કાર્ટમાં જાઓ
        await MiniCart.clickOnMiniCart();
        await CartPage.verifyCartPageDisplayed();

        // કાર્ટમાં પણ એ જ નામ અને ભાવ છે કે નહીં તે ચેક કરો (Cross-Page Data Validation)
        await CartPage.verifyProductDetailsInCart(expectedName, expectedPrice);
    });

});