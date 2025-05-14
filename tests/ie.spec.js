const { test, expect } = require("playwright/test");
import { IE_page } from "../Pages/IE_page";

test("launch the browser and Recaptch", async ({ page }) => {
  const IE = new IE_page(page);

  await IE.launch_IE();
  await page.waitForTimeout(8000);

  await expect(page.locator(IE.IE_Fullpage)).toBeVisible({ timeout: 20000 });
  // await page.locator(IE.Login).click();
  // await expect(page).toHaveURL("https://insightengine.in/sign-in");
  // await page.setDefaultTimeout(5000);

  await page.locator(IE.email_field).scrollIntoViewIfNeeded();
  await page.locator(IE.email_field).fill("abc@gmail.com");

  await expect(page.locator(IE.Re_captcha)).toBeVisible();
  await page.waitForTimeout(5000);
});
