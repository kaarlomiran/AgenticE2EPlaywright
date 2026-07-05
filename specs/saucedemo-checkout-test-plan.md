# Test Plan: SCRUM-101 - Saucedemo Checkout

## Overview
Application: https://www.saucedemo.com
Credentials: standard_user / secret_sauce

This test plan covers the checkout flow acceptance criteria for SCRUM-101.

## Test Scenarios

1. Cart Review - Items Visible
   - Title: Verify cart shows added items and totals
   - Precondition: User is logged in and has at least one item in cart
   - Steps:
     1. Login with `standard_user` / `secret_sauce`
     2. Add one or more products to cart
     3. Navigate to cart page
   - Expected:
     - All added items appear with name, description, price, and quantity
     - Total price displays correct calculation
     - 'Continue Shopping' and 'Checkout' buttons present

2. Checkout Information Entry - Required Fields
   - Title: Verify checkout information validation
   - Precondition: Items in cart
   - Steps:
     1. From cart click 'Checkout'
     2. On checkout information page, leave fields empty and click Continue
     3. Fill fields with valid and invalid values to test validation
   - Expected:
     - Error message shown when any required field empty
     - Error messages specific to the missing/invalid field

3. Order Overview - Summary and Totals
   - Title: Verify checkout overview displays order summary and totals
   - Precondition: Valid checkout information entered
   - Steps:
     1. Enter valid First Name, Last Name, Zip/Postal Code and click Continue
   - Expected:
     - Checkout overview shows list of items, payment, shipping info, subtotal, tax, total
     - 'Cancel' and 'Finish' buttons present

4. Order Completion - Finish Flow
   - Title: Verify order completion and confirmation
   - Precondition: On checkout overview page
   - Steps:
     1. Click 'Finish'
   - Expected:
     - Redirected to order confirmation page
     - Success message displayed and 'Back Home' button present
     - Cart should be cleared

5. Error Handling - Invalid Data
   - Title: Validate behavior on invalid checkout input
   - Precondition: On checkout information page
   - Steps:
     1. Enter invalid characters in fields (e.g., special chars) and click Continue
   - Expected:
     - Proper validation messages and cannot proceed until corrected

## Test Data
- Username: standard_user
- Password: secret_sauce
- Sample products: Sauce Labs Backpack, Sauce Labs Bike Light
- Address samples: FirstName: Test, LastName: User, Zip: 90210

## Execution Notes
- Run tests across Chromium, Firefox, WebKit
- Use stable selectors (data-test, id) where possible
- Capture screenshots at: cart page, checkout info error states, overview, confirmation

## Deliverables
- Test plan file (this file) saved at `specs/saucedemo-checkout-test-plan.md`
- Detailed test cases for manual and automated execution
