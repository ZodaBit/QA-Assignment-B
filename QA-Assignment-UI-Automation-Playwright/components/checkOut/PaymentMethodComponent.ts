import { Page, Locator } from "@playwright/test";

export type PaymentMethod = "COD" | "CheckMoneyOrder" | "CreditCard" | "PurchaseOrder";

export default class PaymentMethodComponent {
  readonly page: Page;

  private paymentRadios: Record<PaymentMethod, Locator>;
  readonly backLink: Locator;
  readonly continueButton: Locator;
  readonly loadingSpan: Locator;

  constructor(page: Page) {
    this.page = page;

    // Map payment methods to locators
    this.paymentRadios = {
      COD: page.locator("input#paymentmethod_0"),
      CheckMoneyOrder: page.locator("input#paymentmethod_1"),
      CreditCard: page.locator("input#paymentmethod_2"),
      PurchaseOrder: page.locator("input#paymentmethod_3"),
    };

    // Navigation buttons
    this.backLink = page.locator("div#payment-method-buttons-container p.back-link a");
    this.continueButton = page.locator("input.button-1.payment-method-next-step-button");
    this.loadingSpan = page.locator("span#payment-method-please-wait");
  }

  // Select any payment method dynamically
  async selectPaymentMethod(method: PaymentMethod) {
    const radio = this.paymentRadios[method];
    await radio.check();
  }

  // Navigation helpers
  async clickBack() {
    await this.backLink.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async waitForLoading() {
    await this.loadingSpan.waitFor({ state: "hidden" });
  }
}
