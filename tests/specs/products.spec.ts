import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/preferred-pom/sauce-demo-login-page';
import * as ProductsPage from 'tests/pages/preferred-pom/sauce-demo-products-page';
import { successLoginCredentials } from '../../testdata/sauce-demo-test-data';

test.describe('Products Page Module Tests', () => {

    // દરેક ટેસ્ટ પહેલા આપણે લોગીન કરવું પડશે, કારણ કે Products પેજ લોગીન વગર ન ખુલે.
    test.beforeEach(async ({ page }) => {
        await LoginPage.navigateToSauceDemoLoginPage();
        await LoginPage.loginWithCredentials(successLoginCredentials.username, successLoginCredentials.password);
        await ProductsPage.verifyProductsPageDisplayed();
    });

    test('TC_06: Verify UI elements are visible on Products page', async ({ page }) => {
        await ProductsPage.verifyUIElementsVisible();
    });

    test('TC_07: Verify exactly 6 products are displayed by default', async ({ page }) => {
        await ProductsPage.verifyProductCount(6);
    });

    test('TC_08: Verify clicking on product image navigates to details page', async ({ page }) => {
        await ProductsPage.clickOnProductImage(1);
        await ProductsPage.verifyProductsPageNotDisplayed(); // નવા પેજ પર 'Products' ટાઇટલ ન હોવું જોઈએ
    });

    test('TC_09: Verify Back to products button redirects to inventory', async ({ page }) => {
        await ProductsPage.clickOnProductImage(1); // પહેલા પ્રોડક્ટની અંદર જાઓ
        await ProductsPage.clickBackToProducts(); // પછી Back બટન દબાવો
        await ProductsPage.verifyProductsPageDisplayed(); // ફરીથી મેઈન પેજ આવી જવું જોઈએ
    });

    test('TC_10: Verify clicking Add to cart changes text to Remove', async ({ page }) => {
        await ProductsPage.verifyProductButtonText(1, 'Add to cart'); // પહેલા ટેક્સ્ટ ચેક કરો
        await ProductsPage.addToCartByProductNumber(1); // બટન પર ક્લિક કરો
        await ProductsPage.verifyProductButtonText(1, 'Remove'); // ક્લિક કર્યા પછી ટેક્સ્ટ બદલાઈ જવું જોઈએ
    });

});