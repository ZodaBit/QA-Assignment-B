import { Page, Locator } from '@playwright/test';

export default class CartPage {
  readonly page: Page;

  // Totals
  readonly subTotalPrice: Locator;
  readonly shippingPrice: Locator;
  readonly paymentFeePrice: Locator;
  readonly taxPrice: Locator;
  readonly orderTotalPrice: Locator;

  // Checkout
  readonly totalDiv: Locator;
  readonly termsOfServiceCheckbox: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.totalDiv = page.locator(".cart-total");
    // Totals section
    this.subTotalPrice = page.locator(
      "table.cart-total tr:has-text('Sub-Total') span.product-price"
    );
    this.shippingPrice = page.locator(
      "table.cart-total tr:has-text('Shipping') span.product-price"
    );
    this.paymentFeePrice = page.locator(
      "table.cart-total tr:has-text('Payment method additional fee') span.product-price"
    );
    this.taxPrice = page.locator(
      "table.cart-total tr:has-text('Tax') span.product-price"
    );
    this.orderTotalPrice = page.locator(
      "table.cart-total tr:has-text('Total') span.product-price"
    );
  
    // Checkout
    this.termsOfServiceCheckbox = page.locator("#termsofservice");
    this.checkoutButton = page.locator("#checkout");
  }

  // -------------------------
  // Actions
  // -------------------------
  async acceptTermsAndCheckout() {
    await this.termsOfServiceCheckbox.check();
    await this.checkoutButton.click();
  }

  async waitTillLoaded() {
    await this.totalDiv.waitFor({ state: "visible" });
  }


}
