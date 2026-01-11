// tests/PlaceOrder.test.ts
import { test as loginTest, expect } from "../fixtures/LoginFixture";
import { test as registerTest } from "../fixtures/RgisterFixture";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProductListPage from "../pages/ProductListPage";
import * as orderDataJson from "../testData/orderData.json";
import { OrderData, BillingAddressData, ShippingAddressData } from "../model/checkoutModels";

// Tell TypeScript the shape of the JSON
const orderData: OrderData = orderDataJson;

// ======================
// Helper: Place order
// ======================
async function placeOrder({
  page,
  fillBilling = false,
}: {
  page: import("@playwright/test").Page;
  fillBilling?: boolean;
}) {
  const home = new HomePage(page);
  const productListPage = new ProductListPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navigate and add products
  await home.navigateTo();
  await home.navigateToBooks();
  for (const index of [0, 1, 2]) {
    await productListPage.addToCart(index);
    await productListPage.waitForLoading();
  }

  // Go to cart and checkout
  await home.clickShoppingCart();
  await cartPage.acceptTermsAndCheckout();

  // Billing
  if (fillBilling) {
    await checkoutPage.billing.fillBillingAddress(orderData.billingAddress as BillingAddressData);
  } else {
    await checkoutPage.billing.selectBillingAddress();
  }
  await checkoutPage.billing.continueToShipping();

  // Shipping
  if (fillBilling) {
    await checkoutPage.shippingAddress.selectShippingAddress(orderData.shippingAddress as ShippingAddressData);
  } else {
    await checkoutPage.shippingAddress.selectShippingAddress();
  }
  await checkoutPage.shippingAddress.continue();

  // Shipping method
  await checkoutPage.shippingMethod.selectShippingMethod("Ground");
  await checkoutPage.shippingMethod.continue();

  // Payment method
  await checkoutPage.paymentMethod.selectPaymentMethod("COD");
  await checkoutPage.paymentMethod.clickContinue();

  // Payment info
  await checkoutPage.paymentInfo.clickContinue();

  // Validate order prices
  const confirmPrices = await checkoutPage.confirmOrder.getConfirmOrderPrices();

  // Type-safe validation
  confirmPrices.lineTotals.forEach((lineTotal, i) => {
    expect(lineTotal).toBe(orderData.lineTotals[i]);
  });

  const { subTotal, shipping, paymentFee, tax, total } = orderData.totals;
  expect(confirmPrices.subTotal).toBe(subTotal);
  expect(confirmPrices.shipping).toBe(shipping);
  expect(confirmPrices.paymentFee).toBe(paymentFee);
  expect(confirmPrices.tax).toBe(tax);
  expect(confirmPrices.total).toBe(total);

  // Confirm order
  await checkoutPage.confirmOrder.clickConfirm();
  await checkoutPage.confirmOrder.waitForPleaseWaitToDisappear();
}

// ======================
// Tests
// ======================

// 1️⃣ Login user order
loginTest("Place order with multiple products via Login", async ({ loginPage }) => {
  await placeOrder({ page: loginPage.page });
});

// 2️⃣ Registered user order
registerTest("Place order with multiple products via Register", async ({ registerPage }) => {
  await placeOrder({ page: registerPage.page, fillBilling: true });
});
