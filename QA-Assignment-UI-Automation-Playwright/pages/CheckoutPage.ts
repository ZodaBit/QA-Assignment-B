import { Page } from '@playwright/test';
import BillingAddressComponent from '../components/checkOut/BillingAddressComponent';
import ShippingAddressComponent from '../components/checkOut/ShippingAddressComponent';
import ShippingMethodComponent from '../components/checkOut/ShippingMethodComponent';
import PaymentMethodComponent from '../components/checkOut/PaymentMethodComponent';
import PaymentInfoComponent from '../components/checkOut/PaymentInfoComponent';
import ConfirmOrderComponent from '../components/checkOut/ConfirmOrderComponent';

export default class CheckoutPage {
  readonly page: Page;

  readonly billing: BillingAddressComponent;
  readonly shippingAddress: ShippingAddressComponent;
  readonly shippingMethod: ShippingMethodComponent;
  readonly paymentMethod: PaymentMethodComponent;
  readonly paymentInfo: PaymentInfoComponent;
  readonly confirmOrder: ConfirmOrderComponent;

  constructor(page: Page) {
    this.page = page;

    this.billing = new BillingAddressComponent(page);
    this.shippingAddress = new ShippingAddressComponent(page);
    this.shippingMethod = new ShippingMethodComponent(page);
    this.paymentMethod = new PaymentMethodComponent(page);
    this.paymentInfo = new PaymentInfoComponent(page);
    this.confirmOrder = new ConfirmOrderComponent(page);
  }
}