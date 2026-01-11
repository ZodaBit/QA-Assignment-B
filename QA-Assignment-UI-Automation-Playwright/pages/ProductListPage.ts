import { Locator, Page, expect } from "@playwright/test";

export default class ProductListPage {
  readonly page: Page;
  readonly sortByDropdown: Locator;
  readonly displayPerPageDropdown: Locator;
  readonly viewAsDropdown: Locator;

  readonly productItems: Locator;
  readonly productTitle: Locator;
  readonly productActualPrice: Locator;
  readonly productOldPrice: Locator;
  readonly addToCartButton: Locator;
  readonly waitingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortByDropdown = page.locator("select#products-orderby");
    this.displayPerPageDropdown = page.locator("select#products-pagesize");
    this.viewAsDropdown = page.locator("select#products-viewmode");
    this.productItems = page.locator(".product-item");
    this.productTitle = page.locator(".product-title");
    this.productActualPrice = page.locator(".price");
    this.productOldPrice = page.locator(".old-price");
    this.addToCartButton = page.locator("input.product-box-add-to-cart-button");
    this.waitingIndicator = page.locator(".ajax-loading-block-window");
  }

  async getProductItems() {
    return await this.productItems.all();
  }

  async getProductTitle(productIndex: number) {
    return await this.productTitle.nth(productIndex).textContent();
  }

  async getProductActualPrice(productIndex: number) {
    return await this.productActualPrice.nth(productIndex).textContent();
  }

  async getProductOldPrice(productIndex: number) {
    return await this.productOldPrice.nth(productIndex).textContent();
  }

  async addToCart(productIndex: number) {
    await this.addToCartButton.nth(productIndex).click();
  }

  async sortBy(option: string) {
    await this.sortByDropdown.selectOption({ label: option });
  }
  async setDisplayPerPage(option: string) {
    await this.displayPerPageDropdown.selectOption({ label: option });
  }
  async setViewAs(option: string) {
    await this.viewAsDropdown.selectOption({ label: option });
  }
  async waitForLoading() {
    await this.waitingIndicator.waitFor({ state: "hidden" , timeout: 5000 });
  }
}
