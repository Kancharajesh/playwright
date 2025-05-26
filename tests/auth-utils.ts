// tests/auth-utils.ts
import { Page } from "@playwright/test";

/**
 * Logs in to any subdomain using mobile number and OTP.
 * @param page Playwright page object
 * @param subdomain e.g., 'irctc', 'superj', 'udchalo', 'irctctourism'
 * @param mobile 10-digit mobile number
 * @param otp 6-digit OTP (default: "777777")
 */
export async function loginToApp(page: Page, subdomain: string, mobile: string, otp: string = "777777") {
  await page.goto(`https://${subdomain}.superj.app/Login`);
  await page.getByRole("textbox", { name: "phone-number-input" }).fill(mobile);
  await page.getByRole("button", { name: "Get OTP" }).click();

  for (let i = 0; i < otp.length; i++) {
    await page
      .getByRole("textbox", { name: `Please enter OTP character ${i + 1}` })
      .fill(otp[i]);
  }

  await page.getByRole("button", { name: "Confirm OTP" }).click();
}
