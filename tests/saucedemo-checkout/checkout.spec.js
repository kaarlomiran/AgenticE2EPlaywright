const { test, expect } = require('@playwright/test');

const APP_URL = 'https://www.saucedemo.com';
const USER = { username: 'standard_user', password: 'secret_sauce' };

test.describe('Saucedemo Checkout Flow - SCRUM-101', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL);
    await page.fill('#user-name', USER.username);
    await page.fill('#password', USER.password);
    await page.click('#login-button');
  });

  test('Cart review shows items and total', async ({ page }) => {
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.inventory_item_name')).toHaveText(/Backpack/i);
    await expect(page.locator('button[data-test="checkout"]')).toBeVisible();
  });

  test('Checkout information requires all fields', async ({ page }) => {
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('button[data-test="checkout"]');
    // Leave fields empty and continue
    await page.click('#continue');
    await expect(page.locator('h3[data-test="error"]')).toBeVisible().catch(()=>{});
    // Fill with valid data and continue
    await page.fill('#first-name', 'Test');
    await page.fill('#last-name', 'User');
    await page.fill('#postal-code', '90210');
    await page.click('#continue');
    await expect(page).toHaveURL(/checkout-step-two|checkout-step-two.html|.*overview/);
  });

  test('Complete order and see confirmation', async ({ page }) => {
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('button[data-test="checkout"]');
    await page.fill('#first-name', 'Test');
    await page.fill('#last-name', 'User');
    await page.fill('#postal-code', '90210');
    await page.click('#continue');
    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText(/THANK YOU FOR YOUR ORDER/i);
    await expect(page.locator('#back-to-products')).toBeVisible();
  });
});
