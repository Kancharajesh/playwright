import { test, expect, devices } from "@playwright/test";
import { Mobileelements_page } from "../Pages/Mobileelements_page";

test.use({ ...devices["Pixel 5"] });

const loginAndEnterOTP = async (page, mobile, otp = "777777") => {
  await page.goto("https://irctc.superj.app/Login");
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();
  for (let i = 0; i < 6; i++) {
    await page.getByRole("textbox", { name: `Please enter OTP character ${i + 1}` }).fill(otp[i]);
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

test("Mobile Home Page", async ({ page }) => {
  await loginAndEnterOTP(page, "9705210647", "777777");
  await expect(page.locator("div:nth-child(3) > .flex")).toBeVisible();
});

test("Logout", async ({ page }) => {
  await loginAndEnterOTP(page, "9885060891", "777777");
  await page.getByRole("link", { name: "wallet Wallet" }).click();
  await expect(page.getByText("Super J500 People Earned ₹250")).toBeVisible();
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

test('Home page is visible', async ({ page }) => {
  const Mobile = new Mobileelements_page(page);

  await page.goto('https://superj.app/Login');
  await expect(page.getByText('Login to Start 💰+91Enter')).toBeVisible();
  await page.getByRole('textbox', { name: 'phone-number-input' }).fill('97052 10647');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByRole('textbox', { name: 'Please enter OTP character 1' }).click();
  await page.getByRole('textbox', { name: 'Please enter OTP character 1' }).fill('7');
  await page.getByRole('textbox', { name: 'Please enter OTP character 2' }).fill('7');
  await page.getByRole('textbox', { name: 'Please enter OTP character 3' }).fill('7');
  await page.getByRole('textbox', { name: 'Please enter OTP character 4' }).fill('7');
  await page.getByRole('textbox', { name: 'Please enter OTP character 5' }).fill('7');
  await page.getByRole('textbox', { name: 'Please enter OTP character 6' }).fill('7');
  await page.waitForTimeout(2000);

  await page.locator(Mobile.gotoHomePage);
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

