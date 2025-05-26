const { test, expect } = require("@playwright/test");
const { IE_page } = require("../Pages/IE_page");

const Test_Email = "Test@gmail.com";
const BASE_URL = "https://insightengine.in";

test("Launch InsightEngine and check Recaptcha", async ({ page }) => {
  const IE = new IE_page(page);

  await IE.launch_IE();
  await IE.isFullPageVisible();
  await IE.fillEmailField("abc@gmail.com");
  await IE.verifyRecaptchaVisible();
  await page.waitForTimeout(2000);
});

test("Navigate to Pricing and verify section", async ({ page }) => {
  const IE = new IE_page(page);

  await IE.launch_IE();
  await page.waitForTimeout(1000);

  await IE.clickPricing();
  await expect(page).toHaveURL("https://insightengine.in/pricing");
  await IE.isPricingPageVisible();

  await page.waitForTimeout(2000);
  await IE.clickResources();
  await IE.isResourecesPageVisible();
  await expect(page).toHaveURL("https://insightengine.in/resources/casestudy");

});
