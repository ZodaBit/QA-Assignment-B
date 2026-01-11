import { Page, Locator, expect } from '@playwright/test';

export default class HomePage {
  readonly page: Page;

  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly shoppingCartLink: Locator;
  readonly wishList: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerLink = page.locator('a[href*="register"]').first();
    this.loginLink = page.locator('a[href*="login"]');
    this.shoppingCartLink = page.locator('a[href*="cart"]').first();
    this.wishList = page.locator('a[href*="wishlist"]');
    this.searchBox = page.locator('input[type="search"]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickShoppingCart() {
    await this.shoppingCartLink.click();
  }

  async clickWishList() {
    await this.wishList.click();
  }

  async searchForItem(item: string) {
    await this.searchBox.fill(item);
    await this.searchButton.click();
  }

  /**
   * Automatically detect the menu that is visible and click the category
   * @param category Category name (Books, Computers, Electronics, etc.)
   */
async navigateToCategory(category: string) {
  // Desktop menu - pick only the first match
  const desktopMenu = this.page.locator(`.header-menu .top-menu > li:has-text("${category}") >> a`).first();

  // Mobile menu - pick only the first match
  const mobileMenu = this.page.locator(`.mob-top-menu > li:has-text("${category}") >> a`).first();

  // Sidebar menu - pick only the first match
  const sidebarMenu = this.page.locator(`.side-2 .listbox .list li:has-text("${category}") a`).first();

  if (await desktopMenu.isVisible()) {
    await desktopMenu.click();
  } else if (await mobileMenu.isVisible()) {
    const mobileButton = this.page.locator('#mob-menu-button');
    if (await mobileButton.isVisible()) {
      await mobileButton.click();
    }
    await mobileMenu.click();
  } else if (await sidebarMenu.isVisible()) {
    await sidebarMenu.click();
  } else {
    throw new Error(`Category "${category}" not found in any menu`);
  }
}

  // Convenience methods
  async navigateToBooks() {
    await this.navigateToCategory('Books');
  }
  async navigateToComputers() {
    await this.navigateToCategory('Computers');
  }
  async navigateToElectronics() {
    await this.navigateToCategory('Electronics');
  }
  async navigateToApparel() {
    await this.navigateToCategory('Apparel & Shoes');
  }
  async navigateToDigitalDownloads() {
    await this.navigateToCategory('Digital downloads');
  }
  async navigateToJewelry() {
    await this.navigateToCategory('Jewelry');
  }
  async navigateToGiftCards() {
    await this.navigateToCategory('Gift Cards');
  }
}
