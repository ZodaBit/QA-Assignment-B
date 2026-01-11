import { Locator, Page } from "@playwright/test";

export default class ConfirmOrderPage {
  readonly page: Page;

  // Product table
  readonly cartRows: Locator;
  readonly productLineTotals: Locator;

  // Totals
  readonly subTotal: Locator;
  readonly shippingCost: Locator;
  readonly paymentFee: Locator;
  readonly taxAmount: Locator;
  readonly orderTotal: Locator;

  // Buttons
  readonly backButton: Locator;
  readonly confirmButton: Locator;
  readonly pleaseWaitText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Cart rows & line totals
    this.cartRows = page.locator("table.cart tbody tr.cart-item-row");
    this.productLineTotals = this.cartRows.locator(".product-subtotal");

    // Totals (table.cart-total)
    this.subTotal =
      page.locator("table.cart-total tr")
        .filter({ hasText: "Sub-Total" })
        .locator(".product-price");

    this.shippingCost =
      page.locator("table.cart-total tr")
        .filter({ hasText: "Shipping:" })
        .locator(".product-price");

    this.paymentFee =
      page.locator("table.cart-total tr")
        .filter({ hasText: "Payment method additional fee" })
        .locator(".product-price");

    this.taxAmount =
      page.locator("table.cart-total tr")
        .filter({ hasText: "Tax:" })
        .locator(".product-price");

    this.orderTotal =
      page.locator(".product-price.order-total strong");

    // Buttons
    this.backButton =
      page.locator("#confirm-order-buttons-container a");

    this.confirmButton =
      page.locator(
        "#confirm-order-buttons-container .confirm-order-next-step-button"
      );

    this.pleaseWaitText =  page.locator("#confirm-order-please-wait");
  }

  async clickBack() { 
    await this.backButton.click();
  }

  async clickConfirm() {
    await this.confirmButton.click();
  }

  async waitForPleaseWaitToDisappear() {
    await this.pleaseWaitText.waitFor({ state: "hidden" });
  }

  // -------------------------
  // NEW METHOD: get line totals + totals
  // -------------------------
  async getConfirmOrderPrices() {
    // Line totals
       await this.cartRows.first().waitFor({ state: 'visible' });
    const lineTotals: number[] = [];
    const rowCount = await this.cartRows.count();
    for (let i = 0; i < rowCount; i++) {
      const subtotalText = await this.productLineTotals.nth(i).textContent();
      lineTotals.push(parseFloat((subtotalText ?? "0").replace(/[^0-9.-]+/g, "")));
    }

    // Totals
    const subTotalValue = parseFloat(
      (await this.subTotal.textContent())?.replace(/[^0-9.-]+/g, "") ?? "0"
    );
    const shippingValue = parseFloat(
      (await this.shippingCost.textContent())?.replace(/[^0-9.-]+/g, "") ?? "0"
    );
    const paymentFeeValue = parseFloat(
      (await this.paymentFee.textContent())?.replace(/[^0-9.-]+/g, "") ?? "0"
    );
    const taxValue = parseFloat(
      (await this.taxAmount.textContent())?.replace(/[^0-9.-]+/g, "") ?? "0"
    );
    const totalValue = parseFloat(
      (await this.orderTotal.textContent())?.replace(/[^0-9.-]+/g, "") ?? "0"
    );

    return {
      lineTotals,
      subTotal: subTotalValue,
      shipping: shippingValue,
      paymentFee: paymentFeeValue,
      tax: taxValue,
      total: totalValue,
    };
  }
}
