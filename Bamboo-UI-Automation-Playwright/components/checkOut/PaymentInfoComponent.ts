import{Page,Locator} from"@playwright/test";

export default class PaymentInfoComponent {
  readonly page: Page;

    // -------------------------
  // STEP 5: Payment Info
  // -------------------------
   // Step title
  readonly stepNumber: Locator;
  readonly stepHeading: Locator;

  // Payment info text
  readonly infoText: Locator;

  // Buttons
  readonly backLink: Locator;
  readonly continueButton: Locator;
  readonly loadingSpan: Locator;
  constructor(page: Page) {
    this.page = page;

    // Payment Info
    // Step title
    this.stepNumber = page.locator('li#opc-payment_info span.number');
    this.stepHeading = page.locator('li#opc-payment_info h2');

    // Payment info
    this.infoText = page.locator('div.section.payment-info div.info p');

    // Navigation buttons
    this.backLink = page.locator('div#payment-info-buttons-container p.back-link a');
    this.continueButton = page.locator('input.button-1.payment-info-next-step-button');
    this.loadingSpan = page.locator('span#payment-info-please-wait');
  }
     // Payment info
  async clickBack() {
    await this.backLink.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async waitForLoading() {
    await this.loadingSpan.waitFor({ state: "hidden" });
  }

  async getPaymentInfoText() {
    return await this.infoText.textContent();
  }
}
