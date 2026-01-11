import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import User from "../model/userModels";

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ browser }, use) => {
    const user = new User();
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    // Navigate and login
    await loginPage.navigateTo();
    const credentials = user.getCredentials();
    await loginPage.login(credentials.username, credentials.password);

    // Provide loginPage to the test
    await use(loginPage);

    // Close context after test
    await context.close();
  },
});

export const expect = test.expect;
