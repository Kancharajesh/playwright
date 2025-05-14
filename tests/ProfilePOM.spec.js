import { test, expect } from '@playwright/test';
import { Login_page } from "../Pages/Login_Page";
import { Home_page } from "../Pages/Home_page";
import { Profile_page } from "../Pages/Profile_page";
import { Wallet_page } from "../Pages/Wallet_page";
import { Survey_Deatils } from "../Pages/Survey_Deatils";

test("Profile page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Profile = new Profile_page(page);
  const Survey = new Survey_Deatils(page);

  //Lunch the Browser.
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
      await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(13000);

  // Switch to profile screen
      await page.waitForTimeout(20000);
  await page.locator(Home.Profile_buttons).click({ timeout: 200000 });
  await expect(page.locator(Profile.Fullprofilepage)).toBeVisible({timeout:20000});
      await page.waitForTimeout(10000);
});

test("Transaction history screen should be visible", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Profile = new Profile_page(page);
  const Survey = new Survey_Deatils(page);

  //Lunch the Browser.
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
      await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
      await page.waitForTimeout(5000);

  // Switch to profile screen
  await page.locator(Home.Profile_buttons).click({ timeout: 200000 });
  await page.locator(Profile.View_All).click({ timeout: 200000 });
      await page.waitForTimeout(5000);
  //transaction History
  await expect(page.locator(Profile.History_allcoupons)).toBeVisible();
      await page.waitForTimeout(5000);

  const couponText = await page.locator(Profile.History_allcoupons).innerText();
  console.log("Coupon Text:", couponText);
});

test("Transaction history cash screen should be visible", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Profile = new Profile_page(page);
  const Survey = new Survey_Deatils(page);

  //Lunch the Browser.
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
      await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
      await page.waitForTimeout(20000);

  // Switch to profile screen
  await page.locator(Home.Profile_buttons).click({ timeout: 20000 });
  await page.locator(Profile.View_All).click({ timeout: 20000 });
      await page.waitForTimeout(5000);

  //transaction History
  await page.locator(Profile.History_Cash).click();
  await expect(page.locator(Profile.History_allCash)).toBeVisible();
      await page.waitForTimeout(5000);

  const couponText = await page.locator(Profile.History_allCash).innerText();
  console.log("Coupon Text:", couponText);
});

test("Logout and verify the URL after logging out", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Profile = new Profile_page(page);
  const Survey = new Survey_Deatils(page);

  //Lunch the Browser.
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
      await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
      await page.waitForTimeout(5000);

  // Switch to profile screen
  await page.locator(Home.Profile_buttons).click({ timeout: 20000 });
  await page.locator(Profile.Logout).click({ timeout: 20000 });
  //       await page.waitForTimeout(5000);
  await page.locator(Profile.Logout_yes).click();

  await expect(page).toHaveURL("https://irctc.superj.app/Welcome");
  await page.reload();
      await page.waitForTimeout(5000);
  await page.goBack();
  await expect(page).toHaveURL("https://irctc.superj.app/Welcome");
});
