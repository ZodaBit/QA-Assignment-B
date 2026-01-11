import { Page ,Locator} from '@playwright/test';

export default class ProductDetailsPage {

    readonly page: Page;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    readonly productDescription: Locator;
    readonly addToCartButton: Locator;
    readonly quantityInput: Locator;
    readonly emailAFriendButton: Locator;
    readonly addToCompareListButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.productTitle = page.locator(".product-title");
      this.productPrice = page.locator(".product-price");
      this.productDescription = page.locator(".product-description");
      this.addToCartButton = page.locator("button.add-to-cart-button");
      this.quantityInput = page.locator("input.qty-input");
      this.emailAFriendButton = page.locator("button.email-a-friend-button");
      this.addToCompareListButton = page.locator(
        "button.add-to-compare-list-button"
      );
    }
  
    async getProductTitle() {
      return await this.productTitle.textContent();
    }
  
    async getProductPrice() {
      return await this.productPrice.textContent();
    }
  
    async getProductDescription() {
      return await this.productDescription.textContent();
    }
  
    async setQuantity(quantity: number) {
      await this.quantityInput.fill(quantity.toString());
    }
  
    async addToCart() {
      await this.addToCartButton.click();
    }
    async emailAFriend() {
      await this.emailAFriendButton.click();
    }
    
    async addToCompareList() {
      await this.addToCompareListButton.click();
    }
    
  }