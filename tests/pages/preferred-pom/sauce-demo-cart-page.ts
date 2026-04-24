import { expectElementToBeVisible, expectElementToHaveText } from '@AssertUtils';
import { getLocatorByText, getLocator } from '@LocatorUtils';
import { clickAndNavigate } from '@ActionUtils';

// Locators
const yourCartTitle = () => getLocatorByText('Your Cart', { exact: true });
const cartItemName = '.inventory_item_name';
const cartItemPrice = '.inventory_item_price';
const checkoutButton = '#checkout';

// Actions
export async function clickCheckout() {
    await clickAndNavigate(checkoutButton);
}

// Assertions
export async function verifyCartPageDisplayed() {
    await expectElementToBeVisible(yourCartTitle());
}

export async function verifyProductDetailsInCart(expectedName: string, expectedPrice: string) {
    // કાર્ટમાં પ્રોડક્ટનું નામ અને ભાવ બરાબર છે કે નહીં તે ચેક કરશે
    await expectElementToHaveText(cartItemName, expectedName);
    await expectElementToHaveText(cartItemPrice, expectedPrice);
}