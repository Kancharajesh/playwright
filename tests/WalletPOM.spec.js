import { test, expect } from '@playwright/test';
import { Home_page } from "../Pages/Home_page";
import { Login_page } from "../Pages/Login_Page";
import { Wallet_page } from "../Pages/Wallet_page";
import { Survey_Details } from "../Pages/Survey_Deatils";
import { profile_page } from "../Pages/Profile_page";

test("Wallet screen should be visible", async ({ page }) => {
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

  await page.locator(Home.Wallet_buttons).click({timeout:20000});
    await page.waitForTimeout(5000);

  await expect(page.locator(Wallet.WalletFullpage)).toBeVisible({timeout: 200000});
});

test("Recent coupons should be visible", async ({ page }) => {
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

  await page.locator(Home.Wallet_buttons).click({timeout:20000});
      await page.waitForTimeout(5000);

  await page.locator(Wallet.WalletFullpage).scrollIntoViewIfNeeded();
  await expect(page.locator(Wallet.Recentcoupons)).toBeVisible();
});

test("Gift cards screen should be visible, even when empty", async ({ page }) => {
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

  await page.locator(Home.Wallet_buttons).click();
      await page.waitForTimeout(5000);

  // Switch to Gift cards
  await page.locator(Wallet.Cashout_botton).click();

  //   await page.locator(Wallet.WalletFullpage).scrollIntoViewIfNeeded();
  await expect(page.locator(Wallet.Cashout_cashInfo)).toBeVisible({
    timeout: 200000
  });
  // await expect(page.locator(Wallet.Redeem_giftcards)).toBeVisible({timeout:20000});
});

test("Redeem gift if balance > ₹250 and button is visible", async ({ page }) => {
    const login = new Login_page(page);
    const Home = new Home_page(page);
    const Wallet = new Wallet_page(page);
  
    // Login
    await login.LoginWebiste();
    await login.Enter_mobileNumber("9885060891");
      await page.waitForTimeout(5000);
  
    const otp = ["7", "7", "7", "7", "7", "7"];
    for (let i = 0; i < otp.length; i++) {
      await login[`OTP__${i + 1}`](otp[i]);
    }
  
    await page.locator(login.OTP_Screen_Continue).click();
    await page.waitForTimeout(5000);
  
    // Go to Wallet
    await page.locator(Home.Wallet_buttons).click();
        await page.waitForTimeout(5000);
    await page.locator(Wallet.Cashout_botton).click();
  
    // Wait for cash info
    await expect(page.locator(Wallet.Cashout_cashInfo)).toBeVisible({ timeout: 200000 });
  
    // Get balance amount
    const balanceText = await page.locator(Wallet.Cashout_cashInfo).textContent();
    const balanceAmount = parseInt(balanceText.replace(/[^0-9]/g, ""), 10);
    console.log("Available Balance:", balanceAmount);
  
    if (balanceAmount > 250) {
      const redeemButton = page.locator(Wallet.Redeem_giftcards);
  
      if (await redeemButton.count() > 0 && await redeemButton.isVisible()) {
        await redeemButton.click();
        console.log("Redeem button clicked.");
      } else {
        console.log("Redeem button not visible or not rendered.");
      }
    } else {
      console.log("Balance less than ₹250. Skipping redeem.");
    }
  });
  
  


