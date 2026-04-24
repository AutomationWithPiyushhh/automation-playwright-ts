import { expectElementToBeVisible, expectElementToBeHidden } from '@AssertUtils';
import { click } from '@ActionUtils';
import { getLocator, getLocatorByText } from '@LocatorUtils';

// Locators
const productsTitle = () => getLocatorByText('Products', { exact: true });
const addToCartButton = (index: number) => getLocator(`.inventory_item:nth-child(${index}) button`);

// Actions & Assertions
export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsTitle());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsTitle());
}

export async function addToCartByProductNumber(productNumber: number) {
  // પ્રોડક્ટ નંબર મુજબ 'Add to cart' બટન પર ક્લિક કરશે
  await click(addToCartButton(productNumber));
}
