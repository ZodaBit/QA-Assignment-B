import { Locator, Page, expect } from "@playwright/test";
import { ShippingAddressData } from "../../model/checkoutModels";

export default class ShippingAddressComponent {
  readonly page: Page;

  readonly shippingStep: Locator;
  readonly shippingAddressSelect: Locator;
  readonly newAddressForm: Locator;
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
  readonly pickupInStoreCheckbox: Locator;
  readonly continueButton: Locator;
  readonly loadingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.shippingStep = page.locator("#opc-shipping");
    this.shippingAddressSelect = page.locator("#shipping-address-select");
    this.newAddressForm = page.locator("#shipping-new-address-form");

    this.firstName = page.locator("#ShippingNewAddress_FirstName");
    this.lastName = page.locator("#ShippingNewAddress_LastName");
    this.email = page.locator("#ShippingNewAddress_Email");
    this.company = page.locator("#ShippingNewAddress_Company");
    this.country = page.locator("#ShippingNewAddress_CountryId");
    this.state = page.locator("#ShippingNewAddress_StateProvinceId");
    this.city = page.locator("#ShippingNewAddress_City");
    this.address1 = page.locator("#ShippingNewAddress_Address1");
    this.address2 = page.locator("#ShippingNewAddress_Address2");
    this.zip = page.locator("#ShippingNewAddress_ZipPostalCode");
    this.phone = page.locator("#ShippingNewAddress_PhoneNumber");
    this.fax = page.locator("#ShippingNewAddress_FaxNumber");

    this.pickupInStoreCheckbox = page.locator("#PickUpInStore");
    this.continueButton = page.locator(
      "#shipping-buttons-container input.new-address-next-step-button"
    );
    this.loadingIndicator = page.locator("#shipping-please-wait");
  }

  /**
   * Select an existing shipping address or fill a new one
   * @param data ShippingAddressData | null
   * If data is provided => select "New Address" and fill it
   * If data is null => select the first existing address
   */
  async selectShippingAddress(data?: ShippingAddressData) {
    if (data) {
      // Select "New Address"
      await this.shippingAddressSelect.selectOption(""); // value="" is New Address
      await expect(this.newAddressForm).toBeVisible();
      await this.fillNewShippingAddress(data);
    } else {
      // Select first existing address
      await this.shippingAddressSelect.selectOption({ index: 0 });
    }
  }

  async fillNewShippingAddress(data: ShippingAddressData) {
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
    if (data.pickupInStore) await this.pickupInStoreCheckbox.check();
  }

  async continue() {
    await this.continueButton.click();
    await this.loadingIndicator.waitFor({ state: "hidden" });
  }
}
