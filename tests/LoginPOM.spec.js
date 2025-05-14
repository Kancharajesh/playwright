import { test, expect } from '@playwright/test';
import { Login_page } from "../Pages/Login_Page";
import { Console, log } from "console";

test("Should allow login with a valid OTP", async ({ page }) => {
  const login = new Login_page(page);

  // launch the Website
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
    await page.waitForTimeout(5000);

  // Check if OTP screen is visible
  await expect(page.locator(login.OTPScreen_Displayed)).toBeVisible();
  await login.OTP_screen_Visiable();

  // Enter Valid OTP
  await login.OTP__1("7");
  await login.OTP__2("7");
  await login.OTP__3("7");
  await login.OTP__4("7");
  await login.OTP__5("7");
  await login.OTP__6("7");

    await page.waitForTimeout(5000);
 
  // Submit
  await page.locator(login.OTP_Screen_Continue).click();
      await page.waitForTimeout(5000);

  await expect(page.locator(login.Homepage)).toBeVisible();

});

test("Should display an error message for an invalid OTP", async ({ page }) => {
    const login = new Login_page(page);
    await login.LoginWebiste();
    await login.Enter_mobileNumber("9705210647");
      await page.waitForTimeout(5000);
  
    // Check if OTP screen is visible
    await expect(page.locator(login.OTPScreen_Displayed)).toBeVisible();
    await login.OTP_screen_Visiable();
  
    // Enter Invalid OTP characters
    await login.OTP__1("7");
    await login.OTP__2("1");
    await login.OTP__3("1");
    await login.OTP__4("7");
    await login.OTP__5("1");
    await login.OTP__6("1");
  
      await page.waitForTimeout(5000);
  
    // Submit
    await page.locator(login.OTP_Screen_Continue).click();
  
    // Validate error message is shown
    await expect(page.locator(login.Incorrect_OTP_Text)).toBeVisible({ timeout: 200000 });
  
    const errorText = await page.locator(login.Incorrect_OTP_Text).textContent();
    console.log("OTP Error Message:", errorText?.trim());
  
    await page.waitForTimeout(5000);
  });
  

  
  