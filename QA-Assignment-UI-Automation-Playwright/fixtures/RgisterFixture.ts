import { test as base } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import RegisterUser from "../model/RegisterModels";

type Fixtures = {
  registerPage: RegisterPage;
};

export const test = base.extend<Fixtures>({
  registerPage: async ({ browser }, use) => {
    const registerUser = new RegisterUser();
    const context = await browser.newContext();
    const page = await context.newPage();
    const registerPage = new RegisterPage(page);

    // Navigate and register user
    await registerPage.navigateTo();
    const data = registerUser.getUserData();
    await registerPage.registerUser(
      data.gender,
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );

    // Provide registerPage to the test
    await use(registerPage);

    // Close context after test
    await context.close();
  },
});

export const expect = test.expect;
