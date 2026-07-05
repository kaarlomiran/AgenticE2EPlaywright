# Exploratory Testing Results - Saucedemo Checkout

Date: 2026-07-05

Summary:
- Performed a manual walkthrough of the checkout flow on https://www.saucedemo.com using `standard_user` / `secret_sauce`.

Key Selectors and Observations:
- Login page:
  - Username input: `#user-name`
  - Password input: `#password`
  - Login button: `#login-button`
- Product page:
  - Add to cart (example): `button[data-test="add-to-cart-sauce-labs-backpack"]`
  - Cart link: `.shopping_cart_link`
- Cart page:
  - Checkout button: `#checkout` (or `button[data-test="checkout"]`)
- Checkout information page:
  - First name: `#first-name`
  - Last name: `#last-name`
  - Postal code: `#postal-code`
  - Continue button: `#continue`
- Checkout overview page:
  - Finish button: `#finish`
  - Item summary rows: `.cart_item`
- Confirmation page:
  - Success message element: `.complete-header`
  - Back Home button: `#back-to-products` or `.pony_express`

Observed UI behaviors and notes:
- Empty required fields display inline error messages with clear text.
- Subtotal/tax/total values appear in the overview and are consistent with per-item prices.
- The order confirmation clears the cart.

Screenshots:
- Placeholder paths (capture when running exploratory steps):
  - `specs/screenshots/cart-page.png`
  - `specs/screenshots/checkout-info-error.png`
  - `specs/screenshots/checkout-overview.png`
  - `specs/screenshots/confirmation.png`

Recommendations for automation:
- Use `data-test` attributes where available for stable selectors.
- Add retry/wait-for-state around navigation and item visibility.
- Use per-test cleanup to ensure cart state is isolated.
