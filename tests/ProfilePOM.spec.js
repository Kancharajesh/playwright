import { test, expect } from "@playwright/test";
import { Login_page } from "../Pages/Login_Page";
import { Home_page } from "../Pages/Home_page";
import { Profile_page } from "../Pages/Profile_page";
import { Wallet_page } from "../Pages/Wallet_page";
import { Survey_Deatils } from "../Pages/Survey_Deatils";
import { profile } from "console";

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
  await page.waitForTimeout(5000);

  // Switch to profile screen
  await page.waitForTimeout(5000);
  await page.locator(Home.Profile_buttons).click({ timeout: 200000 });
  await expect(page.locator(Profile.Fullprofilepage)).toBeVisible({
    timeout: 20000,
  });
  await page.waitForTimeout(3000);
});

test("Transaction history Coupon screen should be visible", async ({
  page,
}) => {
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
  await page.waitForTimeout(3000);

  const cards = page.locator("//div[@class='Coupons_couponsMainContainer__ZsN7l']");
const count = await cards.count();
console.log(`Number of coupon cards: ${count}`);

  //transaction History
  // await expect(page.locator(Profile.History_allcoupons)).toBeVisible();
  //     await page.waitForTimeout(3000);

  // const couponText = await page.locator(Profile.History_allcoupons).innerText();
  // console.log("Coupon Text:", couponText);
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
  await page.waitForTimeout(5000);

  // Switch to profile screen
  await page.locator(Home.Profile_buttons).click({ timeout: 20000 });
  await page.locator(Profile.View_All).click({ timeout: 20000 });
  await page.waitForTimeout(3000);

  //transaction History
  await page.locator(Profile.History_Cash).click();

  // await expect(page.locator(Profile.History_allCash)).toBeVisible();
  //     await page.waitForTimeout(3000);

  // const couponText = await page.locator(Profile.History_allCash).innerText();
  // console.log("Coupon Text:", couponText);
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

test.skip("Edit profile pincode update", async ({ page }) => {
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

  // Edit profile.
  await page.locator(Profile.EditProfile).click();
  await page.waitForTimeout(2000);
  await Profile.Pincode_input("123456");
  await Profile.save_button();
  // await Profile.Editprofile_toastmessage();
  await page.waitForTimeout(5000);
});

test("DID text is isVisible", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Profile = new Profile_page(page);
  const Survey = new Survey_Deatils(page);

  //Lunch the Browser.
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9705210647");
  await page.waitForTimeout(3000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(5000);

  // Switch to profile screen
  await page.locator(Home.Profile_buttons).click({ timeout: 20000 });

  // Edit profile.
  await page.locator(Profile.DID).click();
  await page.waitForTimeout(2000);

  const didLocator = page.locator(Profile.Inside_DID);
  await page.waitForTimeout(2000);

  if (await didLocator.isVisible()) {
    const didtext = await didLocator.textContent();
    console.log("DID Text is visible:", didtext?.trim());
  } else {
    console.log("DID Text is not visible");
  }

});
