import { test, expect, devices } from "@playwright/test";
import { Mobileelements_page } from "../Pages/Mobileelements_page";

test.use({ ...devices["Pixel 5"] });

// IRCTC AIR
const loginAndEnterOTP = async (page, mobile, otp = "777777") => {
  await page.goto("https://irctc.superj.app/Login");
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();
  for (let i = 0; i < 6; i++) {
    await page
      .getByRole("textbox", { name: `Please enter OTP character ${i + 1}` })
      .fill(otp[i]);
  }
};

// Superj.
const Superj_app = async (page, mobile, otp = "777777") => {
  await page.goto("https://superj.app/Login");
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();
  for (let i = 0; i < 6; i++) {
    await page
      .getByRole("textbox", { name: `Please enter OTP character ${i + 1}` })
      .fill(otp[i]);
  }
};

// IRCTC Tourisum
const IRCTCTourisum = async (page, mobile, otp = "777777") => {
  await page.goto("https://irctctourism.superj.app/Login");
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();
  for (let i = 0; i < 6; i++) {
    await page
      .getByRole("textbox", { name: `Please enter OTP character ${i + 1}` })
      .fill(otp[i]);
  }
};

// Udchalo
const UdChaloLogin = async (page, mobile, otp = "777777") => {
  await page.goto("https://udchalo.superj.app/Login");
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();
  for (let i = 0; i < 6; i++) {
    await page
      .getByRole("textbox", { name: `Please enter OTP character ${i + 1}` })
      .fill(otp[i]);
  }
};

test("Invalid Mobile Number text", async ({ page }) => {
  await page.goto("https://irctc.superj.app/Login");
  await page.getByRole("button", { name: "Get OTP" }).click();
  await expect(page.getByText("Please enter a valid phone")).toBeVisible();
});

test("Mobile OTP Screen - Invalid OTP", async ({ page }) => {
  await loginAndEnterOTP(page, "9705210647", "711712");
  await expect(page.getByText("Please enter a valid otp")).toBeVisible();
  await page.getByRole("button", { name: "Confirm OTP" }).click();
});

test("Superj Mobile Home Page", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);
  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );
  await Superj_app(page, "9705210647", "777777");
  // await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
  await page.waitForTimeout(4000);
  await page.reload();
  await expect(page).toHaveURL("https://superj.app/Home");
  await page.waitForTimeout(4000);
  await Mobile.surveyCard_1();
  await page.waitForTimeout(2000);

  await Mobile.survey_preview_start();
  await page.waitForTimeout(2000);

  await Mobile.verifyQuestionScreen();
  await page.waitForTimeout(2000);
});

test("IRCTC Air Mobile Home Page", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);
  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );
  await loginAndEnterOTP(page, "9705210647", "777777");
  // await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
  await page.waitForTimeout(4000);
  await page.reload();
  await expect(page).toHaveURL("https://irctc.superj.app/Home");
  await page.waitForTimeout(4000);
});

test("IRCTC tourisum Mobile Home Page", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);
  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );
  await IRCTCTourisum(page, "9885060891", "777777");
  // await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
  await page.waitForTimeout(4000);
  await page.reload();
  await expect(page).toHaveURL("https://irctctourism.superj.app/Home");
  await page.waitForTimeout(4000);
});

test("udChalo Mobile Home Page", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);
  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );
  await UdChaloLogin(page, "9885060891", "777777");
  // await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
  await page.waitForTimeout(4000);
  await page.reload();
  await expect(page).toHaveURL("https://udchalo.superj.app/Home");
  await page.waitForTimeout(4000);
});

test("Logout", async ({ page }) => {
  await loginAndEnterOTP(page, "9885060891", "777777");
  await page.getByRole("link", { name: "wallet Wallet" }).click();
  // await expect(page.getByText("Super J500 People Earned ₹250")).toBeVisible();
  await page.getByRole("img", { name: "profile icon" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
  await page.getByRole("button", { name: "Yes, I'll be back" }).click();
  await expect(page).toHaveURL("https://irctc.superj.app/Login");
});

test.skip("Navigate and Validate Survey Home", async ({ page }) => {
  await loginAndEnterOTP(page, "9705210647", "777777");
  await page.waitForTimeout(5000);
  await page.locator("div:nth-child(4)").first().click();
  await page.waitForTimeout(5000);
  await expect(page.locator(".__className_fbe417 > div > div")).toBeVisible();
});

test("Home page is visible", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);

  await page.goto("https://superj.app/Login");
  await expect(page.getByText("Login to Start 💰+91Enter")).toBeVisible();
  await page
    .getByRole("textbox", { name: "phone-number-input" })
    .fill("97052 10647");
  await page.getByRole("button", { name: "Get OTP" }).click();
  await page
    .getByRole("textbox", { name: "Please enter OTP character 1" })
    .click();
  await page
    .getByRole("textbox", { name: "Please enter OTP character 1" })
    .fill("7");
  await page
    .getByRole("textbox", { name: "Please enter OTP character 2" })
    .fill("7");
  await page
    .getByRole("textbox", { name: "Please enter OTP character 3" })
    .fill("7");
  await page
    .getByRole("textbox", { name: "Please enter OTP character 4" })
    .fill("7");
  await page
    .getByRole("textbox", { name: "Please enter OTP character 5" })
    .fill("7");
  await page
    .getByRole("textbox", { name: "Please enter OTP character 6" })
    .fill("7");
  await page.waitForTimeout(2000);

  await page.locator(Mobile.gotoHomePage); //change
  await expect(page).toHaveURL("https://superj.app/Home");
  await page.waitForTimeout(2000);

  await page.getByRole("link", { name: "wallet Wallet" }).click();
  await page.locator(Mobile.isWalletPageVisible);
  await expect(page).toHaveURL("https://superj.app/rewards");
  await page.waitForTimeout(2000);

  await page.getByRole("img", { name: "profile icon" }).click();
  await page.locator(Mobile.isProfileVisible);
  await expect(page).toHaveURL("https://superj.app/profile");
});

test("Superj Survey Page", async ({ page }) => {
  const Mobile = new Mobileelements_page(page);
  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );
  await Superj_app(page, "9705210647", "777777");
  // await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
  await page.waitForTimeout(4000);
  // await page.reload();
  await expect(page).toHaveURL("https://superj.app/Home");
  // await page.waitForTimeout(4000);

  await Mobile.surveyCard_1();
  await page.waitForTimeout(2000);

  await Mobile.survey_preview_start();
  await page.waitForTimeout(2000);

  await Mobile.verifyQuestionScreen();
  await page.waitForTimeout(2000);
});

// tests/mobile-login.spec.ts
// import { test, expect, devices } from "@playwright/test";
// import { loginToApp } from "./auth-utils";

// test.use({ ...devices["Pixel 5"] });

// test("Invalid mobile number shows error", async ({ page }) => {
//   await page.goto("https://irctc.superj.app/Login");
//   await page.getByRole("button", { name: "Get OTP" }).click();
//   await expect(page.getByText("Please enter a valid phone")).toBeVisible();
// });

// test("Invalid OTP shows error", async ({ page }) => {
//   await loginToApp(page, "irctc", "9705210647", "123456");
//   await expect(page.getByText("Please enter a valid otp")).toBeVisible();
// });

// test("SuperJ login redirects to Home", async ({ page }) => {
//   await loginToApp(page, "superj", "9705210647");
//   await expect(page).toHaveURL("https://superj.app/Home");
// });

// test("IRCTC Air login redirects to Home", async ({ page }) => {
//   await loginToApp(page, "irctc", "9705210647");
//   await expect(page).toHaveURL("https://irctc.superj.app/Home");
// });

// test("IRCTC Tourism login redirects to Home", async ({ page }) => {
//   await loginToApp(page, "irctctourism", "9885060891");
//   await expect(page).toHaveURL("https://irctctourism.superj.app/Home");
// });

// test("UdChalo login redirects to Home", async ({ page }) => {
//   await loginToApp(page, "udchalo", "9885060891");
//   await expect(page).toHaveURL("https://udchalo.superj.app/Home");
// });

// test("Logout redirects to login", async ({ page }) => {
//   await loginToApp(page, "irctc", "9885060891");

//   await page.getByRole("link", { name: "wallet Wallet" }).click();
//   await page.getByRole("img", { name: "profile icon" }).click();
//   await page.getByRole("button", { name: "Logout" }).click();
//   await page.getByRole("button", { name: "Yes, I'll be back" }).click();

//   await expect(page).toHaveURL("https://irctc.superj.app/Login");
// });
