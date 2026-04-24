import { test, expect } from '@PageSetup';
import * as LoginPage from 'tests/pages/preferred-pom/sauce-demo-login-page';
import * as ProductsPage from 'tests/pages/preferred-pom/sauce-demo-products-page';
import { successLoginCredentials } from '../../testdata/sauce-demo-test-data';

test.describe('Sorting and Filtering Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        await LoginPage.navigateToSauceDemoLoginPage();
        await LoginPage.loginWithCredentials(successLoginCredentials.username, successLoginCredentials.password);
    });

    test('TC_11: Verify sorting by Name (A to Z)', async ({ page }) => {
        await ProductsPage.selectSortOption('az');
        const actualNames = await ProductsPage.getAllProductNames();

        // જાવાસ્ક્રિપ્ટ નો ઉપયોગ કરીને આલ્ફાબેટિકલ સોર્ટિંગ
        const expectedNames = [...actualNames].sort();
        expect(actualNames).toEqual(expectedNames);
    });

    test('TC_12: Verify sorting by Name (Z to A)', async ({ page }) => {
        await ProductsPage.selectSortOption('za');
        const actualNames = await ProductsPage.getAllProductNames();

        // રિવર્સ સોર્ટિંગ
        const expectedNames = [...actualNames].sort().reverse();
        expect(actualNames).toEqual(expectedNames);
    });

    test('TC_13: Verify sorting by Price (low to high)', async ({ page }) => {
        await ProductsPage.selectSortOption('lohi');
        const actualPrices = await ProductsPage.getAllProductPrices();

        // નંબર્સ માટે એસેન્ડિંગ (Ascending) સોર્ટિંગ
        const expectedPrices = [...actualPrices].sort((a, b) => a - b);
        expect(actualPrices).toEqual(expectedPrices);
    });

    test('TC_14: Verify sorting by Price (high to low)', async ({ page }) => {
        await ProductsPage.selectSortOption('hilo');
        const actualPrices = await ProductsPage.getAllProductPrices();

        // નંબર્સ માટે ડિસેન્ડિંગ (Descending) સોર્ટિંગ
        const expectedPrices = [...actualPrices].sort((a, b) => b - a);
        expect(actualPrices).toEqual(expectedPrices);
    });

});