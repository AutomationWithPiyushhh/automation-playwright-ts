import { expectElementToHaveText } from '@AssertUtils';

// Locator
const shoppingCartBadge = `.shopping_cart_badge`;

// Assertion
export async function verifyMiniCartCount(expectedCount: string) {
  await expectElementToHaveText(shoppingCartBadge, expectedCount);
}
