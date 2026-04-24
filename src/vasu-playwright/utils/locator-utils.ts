import { Locator } from '@playwright/test';
import { getPage } from './page-utils';

/**
 * CSS અથવા XPath નો ઉપયોગ કરીને એલિમેન્ટ શોધવા માટે
 */
export function getLocator(selector: string): Locator {
  return getPage().locator(selector);
}

/**
 * Role (જેમ કે button, link, heading) પરથી એલિમેન્ટ શોધવા માટે
 */
export function getLocatorByRole(
  role: 'button' | 'checkbox' | 'link' | 'heading' | 'textbox' | 'alert' | 'combobox',
  options?: { exact?: boolean; name?: string | RegExp },
): Locator {
  return getPage().getByRole(role, options);
}

/**
 * Placeholder Text (જેમ કે 'Enter Username') પરથી એલિમેન્ટ શોધવા માટે
 */
export function getLocatorByPlaceholder(text: string | RegExp, options?: { exact?: boolean }): Locator {
  return getPage().getByPlaceholder(text, options);
}

/**
 * Text (લખાણ) પરથી એલિમેન્ટ શોધવા માટે
 */
export function getLocatorByText(text: string | RegExp, options?: { exact?: boolean }): Locator {
  return getPage().getByText(text, options);
}
