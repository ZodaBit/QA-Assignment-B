import { Locator, Page, expect } from "@playwright/test";
import { BillingAddressData } from "../../model/checkoutModels";

export default class BillingAddressComponent {
  readonly page: Page;

  readonly billingAddressSelect: Locator;
  readonly billingForm: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly company: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly zip: Locator;
  readonly phone: Locator;
  readonly fax: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.billingAddressSelect = page.locator("#billing-address-select");
    this.billingForm = page.locator("#co-billing-form");
    this.firstName = page.locator("#BillingNewAddress_FirstName");
    this.lastName = page.locator("#BillingNewAddress_LastName");
    this.email = page.locator("#BillingNewAddress_Email");
    this.company = page.locator("#BillingNewAddress_Company");
    this.country = page.locator("#BillingNewAddress_CountryId");
    this.state = page.locator("#BillingNewAddress_StateProvinceId");
    this.city = page.locator("#BillingNewAddress_City");
    this.address1 = page.locator("#BillingNewAddress_Address1");
    this.address2 = page.locator("#BillingNewAddress_Address2");
    this.zip = page.locator("#BillingNewAddress_ZipPostalCode");
    this.phone = page.locator("#BillingNewAddress_PhoneNumber");
    this.fax = page.locator("#BillingNewAddress_FaxNumber");
    this.continueButton = page.locator(
      "#billing-buttons-container input.new-address-next-step-button"
    );
  }

  /**
   * Select an existing billing address or fill a new one
   * @param data BillingAddressData | null
   * If data is provided => select "New Address" and fill it
   * If data is null => select the first existing address
   */
  async selectBillingAddress(data?: BillingAddressData) {
    if (data) {
      // Select "New Address"
      await this.billingAddressSelect.selectOption(""); // value="" corresponds to "New Address"
      await expect(this.billingForm).toBeVisible();
      await this.fillBillingAddress(data);
    } else {
      // Select first existing address
      await this.billingAddressSelect.selectOption({ index: 0 });
    }
  }

  async fillBillingAddress(data: BillingAddressData) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    if (data.company) await this.company.fill(data.company);
    await this.country.selectOption({ label: data.country });
    if (data.state) await this.state.selectOption({ label: data.state });
    await this.city.fill(data.city);
    await this.address1.fill(data.address1);
    if (data.address2) await this.address2.fill(data.address2);
    await this.zip.fill(data.zip);
    await this.phone.fill(data.phone);
    if (data.fax) await this.fax.fill(data.fax);
  }

  async continueToShipping() {
    await this.continueButton.click();
  }
}
