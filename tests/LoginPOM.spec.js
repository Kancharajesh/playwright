import { test, expect } from '@playwright/test';
import { Login_page } from "../Pages/Login_Page";
import { Home_page } from '../Pages/Home_page';
import { Console, log } from "console";

test("Should allow login with a valid OTP", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);

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

  await expect(page.locator(Home.Surveys_screen)).toBeVisible();

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

  test("Should allow login with a valid OTP and call GWS API", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);

  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(response =>
    response.url().includes('//api.superj.app/v2/admin/gws') && response.status() === 200
  );

  // Launch and login steps
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
  await page.waitForTimeout(5000);

  await expect(page.locator(login.OTPScreen_Displayed)).toBeVisible();
  await login.OTP_screen_Visiable();

  // Enter valid OTP
  await login.OTP__1("7");
  await login.OTP__2("7");
  await login.OTP__3("7");
  await login.OTP__4("7");
  await login.OTP__5("7");
  await login.OTP__6("7");

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(5000);

  // Wait for the GWS API to be called
  const gwsResponse = await gwsApiPromise;
  expect(gwsResponse.ok()).toBeTruthy(); 

  // Verify that the home screen is visible after login
  await expect(page.locator(Home.Surveys_screen)).toBeVisible();
});

test.skip("check the Welcome page UI screens", async({page})=>{
  const login = new Login_page(page);

  await page.goto("https://superj.app/Welcome");

  // full welcome page view.
expect(await page.screenshot()).toMatchSnapshot('Welcome.png');

await page.waitForTimeout(2000);
// await login.Click_Download_the_App();
// expect(await page.screenshot()).toMatchSnapshot('DownloadApp.png');

});
  
  