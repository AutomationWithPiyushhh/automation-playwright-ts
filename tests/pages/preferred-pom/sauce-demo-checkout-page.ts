import { expectElementToBeVisible, expectElementToHaveText } from '@AssertUtils';
import { clickAndNavigate, fill, click } from '@ActionUtils';

// 1. Locators
// --- Info Page ---
const firstNameInput = '#first-name';
const lastNameInput = '#last-name';
const zipCodeInput = '#postal-code';
const continueButton = '#continue';
const errorText = '[data-test="error"]';

// --- Overview Page ---
const finishButton = '#finish';
const itemTotalLabel = '.summary_subtotal_label';
const taxLabel = '.summary_tax_label';
const totalLabel = '.summary_total_label';

// --- Complete Page ---
const completeHeader = '.complete-header';
const backHomeButton = '#back-to-products';

// 2. Actions
export async function fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
    await fill(firstNameInput, firstName);
    await fill(lastNameInput, lastName);
    await fill(zipCodeInput, zipCode);
}

export async function clickContinue() {
    await click(continueButton);
}

export async function clickFinish() {
    await clickAndNavigate(finishButton);
}

export async function clickBackHome() {
    await clickAndNavigate(backHomeButton);
}

// 3. Assertions
export async function verifyErrorMessage(expectedMessage: string) {
    await expectElementToHaveText(errorText, expectedMessage);
}

export async function verifyOverviewPageDisplayed() {
    await expectElementToBeVisible(finishButton);
}

export async function verifyPricingLabelsVisible() {
    await expectElementToBeVisible(itemTotalLabel);
    await expectElementToBeVisible(taxLabel);
    await expectElementToBeVisible(totalLabel);
}

export async function verifyOrderSuccessMessage() {
    await expectElementToHaveText(completeHeader, 'Thank you for your order!');
}