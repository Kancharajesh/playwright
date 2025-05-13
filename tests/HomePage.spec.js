import { test, expect } from '@playwright/test';
import { Home_page } from "../Pages/Home_page";
import { Login_page } from "../Pages/Login_Page";
import { Wallet_page } from "../Pages/Wallet_page";
import { Survey_Deatils, Survey_Details } from "../Pages/Survey_Deatils";
import { profile_page } from "../Pages/Profile_page";

  const protectedRoutes = [
  "https://irctc.superj.app/Home",
  "https://irctc.superj.app/Profile",
  "https://irctc.superj.app/rewards"
];

test("Home page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);

  // Launch and login
  await login.LoginWebiste();
  await login.Enter_mobileNumber("9885060891");
    await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
      await page.waitForTimeout(5000);

  await expect(page.locator(Home.FUllSide_Bar)).toBeVisible({timeout:20000});
      await page.waitForTimeout(5000);

  await page.reload();
  await expect(page).toHaveURL("https://irctc.superj.app/Home");
    await page.waitForTimeout(5000);

});


test("Sidebar buttons should be clickable", async ({page})=>{
    const login = new Login_page(page);
    const Home = new Home_page(page);
    const Wallet = new Wallet_page(page);
    const Survey = new Survey_Deatils(page);
  
    // Launch and login
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

    await page.locator(Home.Wallet_buttons).click();
    await expect(page).toHaveURL("https://irctc.superj.app/rewards");
    await page.waitForTimeout(5000);

    await page.locator(Home.Profile_buttons).click();
    await expect(page).toHaveURL("https://irctc.superj.app/profile");
    await page.waitForTimeout(5000);

    await page.locator(Home.Home_buttons).click();
    await expect(page).toHaveURL("https://irctc.superj.app/Home");
    await page.waitForTimeout(5000);


});


test("should redirect to Welcome page if not logged in", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);
  const Survey = new Survey_Deatils(page);

  for (const url of protectedRoutes) {
    await page.goto(url);
    await expect(page).toHaveURL("https://irctc.superj.app/Welcome");
  }
});

test("Survey question should be visible on the page", async ({ page }) => {
    const login = new Login_page(page);
    const Home = new Home_page(page);
    const Wallet = new Wallet_page(page);
    const Survey = new Survey_Deatils(page);

    
    // Launch and login
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

    // Survey Card -1.
    await page.locator(Survey.Card1).click({timeout:20000});
    await page.waitForTimeout(5000);
    await page.locator(Survey.Survey_preview).click({timeout:20000});
    await page.waitForTimeout(5000);
    await expect(page.locator(Survey.Survey_Question_1)).toBeVisible({timeout:20000});
    await page.waitForTimeout(5000);
      
    await page.locator(Survey.selectoption).click({timeout:20000});
    await page.locator(Survey.survey_Next).click({timeout:20000});
    // await page.waitForTimeout(5000);
    // await page.locator(Survey.selectoption).click({timeout:20000});
    // await page.locator(Survey.survey_Next).click({timeout:20000});
    // await page.waitForTimeout(5000);
    // await page.locator(Survey.selectoption).click({timeout:20000});
    // await page.locator(Survey.survey_Next).click({timeout:20000});
    await page.waitForTimeout(15000);
});

