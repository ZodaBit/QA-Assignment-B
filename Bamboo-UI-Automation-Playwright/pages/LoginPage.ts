import { Page, Locator, expect } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;

  // Locators (from the HTML you provided)
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly registerButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#Email'); 
    this.passwordInput = page.locator('#Password');
    this.rememberMeCheckbox = page.locator('#RememberMe');
    this.loginButton = page.locator('input.button-1.login-button[type="submit"]');
    this.forgotPasswordLink = page.locator('a[href*="/passwordrecovery"]'); 
    this.registerButton = page.locator('input.register-button');
    this.errorMessage = page.locator('.message-error'); 
  }

  // Navigate to login page
  async navigateTo() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
