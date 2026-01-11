import { Page, Locator, expect } from '@playwright/test';

export default class RegisterPage {
  readonly page: Page;

  // Locators
  readonly genderMaleRadio: Locator;
  readonly genderFemaleRadio: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Inputs
    this.genderMaleRadio = page.locator('#gender-male');
    this.genderFemaleRadio = page.locator('#gender-female');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');

    // Buttons / messages
    this.registerButton = page.locator('#register-button');
    this.successMessage = page.locator('.result'); // shows "Your registration completed"
    this.errorMessage = page.locator('.message-error'); // error messages
  }

  // Navigate to register page
  async navigateTo() {
    await this.page.goto('/register');
  }

  // Fill personal details
  async selectGender(gender: 'M' | 'F') {
    if (gender === 'M') {
      await this.genderMaleRadio.check();
    } else {
      await this.genderFemaleRadio.check();
    }
  }

  async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  // Submit registration
  async submit() {
    await this.registerButton.click();
  }

  // Complete registration in one step
  async registerUser(gender: string, firstName: string, lastName: string, email: string, password: string) {
    await this.selectGender(gender as 'M' | 'F');
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submit();
  }

  // Assertions
  async expectSuccess() {
    await expect(this.successMessage).toHaveText(/Your registration completed/);
  }

  async expectError() {
    await expect(this.errorMessage).toBeVisible();
  }
}
