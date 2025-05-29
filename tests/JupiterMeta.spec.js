import { test, expect } from "@playwright/test";
import { JM_page } from "../Pages/JM_page";
import { count, time } from "console";

test("launch the jupiterMeta.io", async ({ page }) => {
  await page.goto("https://jupitermeta.io/");

  //HomePage displayed
  await expect(page.locator("(//div)[1]")).toBeVisible({ timeout: 3000 });

  // Navigations button
  await expect(
    page.locator(
      "nav[class='max-w-full flex justify-between items-center text-white text-xs py-7 mx-[180px] NavbarOther_navbarLink__XG1kL']"
    )
  ).toBeVisible({ timeout: 3000 });

  // Scroll into email input filed.
  await page
    .locator("input[placeholder='Enter your work email']")
    .scrollIntoViewIfNeeded();
  await page
    .locator("input[placeholder='Enter your work email']")
    .fill("test@example.com");

  await page.locator("button[value='get in touch button']").click();

  await expect(page.locator(".ContactUs_errorMessage__yA5Hh")).toBeVisible({
    timeout: 5000,
  });
});

test("Navigation", async ({ page }) => {
  await page.goto("https://jupitermeta.io/");

  //HomePage displayed
  await expect(page.locator("(//div)[1]")).toBeVisible({ timeout: 3000 });

  // Navigation.
  await page
    .locator(
      "(//a[@class='flex items-center pl-[20px] pr-[20px] h-full no-underline hover:text-fuchsia duration-300 text-fuchsia'])[1]"
    )
    .click();
  await expect(page.locator("(//div)[16]")).toBeVisible({ timeout: 2000 });

  await page
    .locator(
      "(//a[@class='flex items-center pl-[20px] pr-[20px] h-full no-underline hover:text-fuchsia duration-300 text-white'][normalize-space()='DID'])[1]"
    )
    .click();
  await expect(page.locator("(//div)[18]")).toBeVisible({ timeout: 2000 });
});

test("explorer", async ({ page }) => {
  await page.goto("https://jupitermeta.io/");

  // Wait for the new page (popup) to open after clicking the element
  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"), // Wait for new page event (new window/tab)
    page
      .locator("(//div[@class='NavbarOther_explorertext__R_Z7C'])[1]")
      .click({ timeout: 3000 }),
  ]);

  // Wait for the new page to load completely
  await newPage.waitForLoadState("load");

  // Verify the URL of the new page
  const url = newPage.url();
  if (url === "https://explorer.jupitermeta.io/") {
    console.log("URL verified:", url);
  } else {
    console.error("Unexpected URL:", url);
  }
});

test("Check DID Count is Visible", async ({ page }) => {
  const JM = new JM_page(page);

  await JM.launchjupitermeta();

  await page.waitForTimeout(10000);

  const CountLocator = await JM.scrollToAndVerifyDIDCount();
  const text = await CountLocator.innerText();
  console.log("DID Count Text:", text);
});
