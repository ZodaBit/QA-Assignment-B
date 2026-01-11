export interface OrderTotals {
  subTotal: number;
  shipping: number;
  paymentFee: number;
  tax: number;
  total: number;
}

export interface OrderData {
  lineTotals: number[]; // corresponds to each product's line total
  totals: OrderTotals;
  billingAddress: BillingAddressData;
  shippingAddress: ShippingAddressData;  // overall totals
}

export interface BillingAddressData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  country: string;
  state?: string;
  city: string;
  address1: string;
  address2?: string;
  zip: string;
  phone: string;
  fax?: string;
}
export interface ShippingAddressData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  country: string;
  state?: string;
  city: string;
  address1: string;
  address2?: string;
  zip: string;
  phone: string;
  fax?: string;
  pickupInStore?: boolean;
}