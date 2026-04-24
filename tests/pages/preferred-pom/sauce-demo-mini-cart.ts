import { expectElementToHaveText } from '@AssertUtils';
import { clickAndNavigate } from '@ActionUtils';

// Locator
const shoppingCartBadge = `.shopping_cart_badge`;
const shoppingCartLink = `.shopping_cart_link`;

// Actions
export async function clickOnMiniCart() {
  await clickAndNavigate(shoppingCartLink);
}

// Assertion
export async function verifyMiniCartCount(expectedCount: string) {
  await expectElementToHaveText(shoppingCartBadge, expectedCount);
}