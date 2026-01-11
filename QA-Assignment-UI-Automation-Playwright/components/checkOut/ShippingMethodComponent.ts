import{Page,Locator,expect}from"@playwright/test";

export default class ShippingMethodComponent {
  readonly page: Page;

  // -------------------------
  // STEP 3: Shipping Method
  // -------------------------
  // Step container
  readonly shippingMethodStep: Locator;
  readonly shippingByGroundOption: Locator;
  readonly shippingByNextDayAirOption: Locator;
  readonly shippingBy2ndDayAirOption: Locator;
  readonly continueButton: Locator;
  readonly loadingIndicator: Locator;

  

  constructor(page: Page) {
    this.page = page;
  

   this.shippingMethodStep = page.locator("#opc-shipping_method");
    this.shippingByGroundOption = page.locator("input#shippingoption_0");
    this.shippingByNextDayAirOption = page.locator("input#shippingoption_1");
    this.shippingBy2ndDayAirOption = page.locator("input#shippingoption_2");
    this.continueButton = page.locator("#shipping-method-buttons-container input.shipping-method-next-step-button");
    this.loadingIndicator = page.locator("#shipping-method-please-wait");
  }


    async selectShippingMethod(method: string) {
    switch (method) {
      case "Ground":
        await this.shippingByGroundOption.check();
        break;
      case "Next Day Air":
        await this.shippingByNextDayAirOption.check();
        break;
      case "2nd Day Air":
        await this.shippingBy2ndDayAirOption.check();
        break;
      default:
        throw new Error(`Unknown shipping method: ${method}`);
    }
  }

  async continue() {
    await this.continueButton.click();
    await expect(this.loadingIndicator).toBeHidden();
  }
}