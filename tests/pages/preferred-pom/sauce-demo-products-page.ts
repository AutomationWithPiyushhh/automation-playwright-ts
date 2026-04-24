import { expectElementToBeVisible, expectElementToBeHidden, expectElementToHaveText, expectElementCount } from '@AssertUtils';
import { click, clickAndNavigate } from '@ActionUtils';
import { getLocator, getLocatorByText } from '@LocatorUtils';
import { selectOption } from '@ActionUtils';
import { getAllTexts } from 'utils/element-utils';

// 1. Locators
const productsTitle = () => getLocatorByText('Products', { exact: true });
const appLogo = '.app_logo';
const shoppingCartIcon = '.shopping_cart_link';
const filterDropdown = '.product_sort_container';
const inventoryItems = '.inventory_item';
const productImage = (index: number) => getLocator(`.inventory_item:nth-child(${index}) .inventory_item_img a`);
const addToCartButton = (index: number) => getLocator(`.inventory_item:nth-child(${index}) button`);
const backToProductsButton = '#back-to-products';
const productNames = '.inventory_item_name';
const productPrices = '.inventory_item_price';
const getProductNameByIndex = (index: number) => getLocator(`.inventory_item:nth-child(${index}) .inventory_item_name`);
const getProductPriceByIndex = (index: number) => getLocator(`.inventory_item:nth-child(${index}) .inventory_item_price`);

// 2. Actions
export async function addToCartByProductNumber(productNumber: number) {
  await click(addToCartButton(productNumber));
}

export async function clickOnProductImage(productNumber: number) {
  await clickAndNavigate(productImage(productNumber));
}

export async function clickBackToProducts() {
  await clickAndNavigate(backToProductsButton);
}

// 3. Assertions
export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsTitle());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsTitle());
}

export async function verifyUIElementsVisible() {
  await expectElementToBeVisible(appLogo);
  await expectElementToBeVisible(shoppingCartIcon);
  await expectElementToBeVisible(filterDropdown);
}

export async function verifyProductCount(count: number) {
  await expectElementCount(inventoryItems, count);
}

export async function verifyProductButtonText(productNumber: number, text: string) {
  await expectElementToHaveText(addToCartButton(productNumber), text);
}

// --- Sorting Functions ---

export async function selectSortOption(value: 'az' | 'za' | 'lohi' | 'hilo') {
  await selectOption(filterDropdown, value);
}

export async function getAllProductNames(): Promise<string[]> {
  return await getAllTexts(productNames);
}

export async function getAllProductPrices(): Promise<number[]> {
  const pricesText = await getAllTexts(productPrices);
  // આ ફંક્શન "$29.99" જેવા ટેક્સ્ટમાંથી "$" કાઢીને તેને નંબરમાં ફેરવી દેશે
  return pricesText.map(price => parseFloat(price.replace('$', '')));
}

export async function getProductName(productNumber: number): Promise<string> {
  const element = getProductNameByIndex(productNumber);
  return (await element.innerText()).trim();
}

export async function getProductPrice(productNumber: number): Promise<string> {
  const element = getProductPriceByIndex(productNumber);
  return (await element.innerText()).trim();
}