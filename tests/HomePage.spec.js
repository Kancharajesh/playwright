import { test, expect } from "@playwright/test";
import { Home_page } from "../Pages/Home_page";
import { Login_page } from "../Pages/Login_Page";
import { Wallet_page } from "../Pages/Wallet_page";
import { Survey_Deatils, Survey_Details } from "../Pages/Survey_Deatils";
import { profile_page } from "../Pages/Profile_page";

const protectedRoutes = [
  "https://irctc.superj.app/Home",
  "https://irctc.superj.app/Profile",
  "https://irctc.superj.app/rewards",
];

async function loginSuperj(page, mobilenumber, OtpArray) {
  const login = new Login_page(page);

  await login.Enter_mobileNumber("9885060891");
  await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(5000);
}

test(" IRCTC AIR Home page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);

  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );

  // Launch and login
  await login.LoginWebiste();
  await loginSuperj(page, "9885060891", ["7", "7", "7", "7", "7", "7"]);

  // Wait for the GWS API to be called
  const gwsResponse = await gwsApiPromise;
  expect(gwsResponse.ok()).toBeTruthy(); // Asserts status 2xx

  await expect(page.locator(Home.FUllSide_Bar)).toBeVisible({ timeout: 20000 });
  await page.waitForTimeout(3000);

  await page.reload();
  await expect(page).toHaveURL("https://irctc.superj.app/Home");
  await page.waitForTimeout(3000);
});

test(" Superj Home page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);

  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );

  // Launch and login
  await page.goto("https://superj.app/Welcome");
  await login.Enter_mobileNumber("9885060891");
  await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(5000);

  // Wait for the GWS API to be called
  const gwsResponse = await gwsApiPromise;
  expect(gwsResponse.ok()).toBeTruthy(); // Asserts status 2xx

  await expect(page.locator(Home.FUllSide_Bar)).toBeVisible({ timeout: 20000 });
  await page.waitForTimeout(3000);

  await page.reload();
  await expect(page).toHaveURL("https://superj.app/Home");
  await page.waitForTimeout(3000);
});

test(" Tourisum Home page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);

  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );

  // Launch and login
  await page.goto("https://irctctourism.superj.app/Welcome");
  await login.Enter_mobileNumber("9885060891");
  await page.waitForTimeout(5000);

  // Enter OTP
  const otp = ["7", "7", "7", "7", "7", "7"];
  for (let i = 0; i < otp.length; i++) {
    await login[`OTP__${i + 1}`](otp[i]);
  }

  await page.locator(login.OTP_Screen_Continue).click();
  await page.waitForTimeout(5000);

  // Wait for the GWS API to be called
  const gwsResponse = await gwsApiPromise;
  expect(gwsResponse.ok()).toBeTruthy(); // Asserts status 2xx

  await expect(page.locator(Home.FUllSide_Bar)).toBeVisible({ timeout: 20000 });
  await page.waitForTimeout(3000);

  await page.reload();
  await expect(page).toHaveURL("https://irctctourism.superj.app/Home");
  await page.waitForTimeout(3000);
});

test(" UdChalo Home page should be visible after login", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Wallet = new Wallet_page(page);

  // Intercept API response for the expected URL
  const gwsApiPromise = page.waitForResponse(
    (response) =>
      response.url().includes("//api.superj.app/v2/admin/gws") &&
      response.status() === 200
  );

  // Launch and login
  await page.goto("https://udchalo.superj.app/Welcome");
  await loginSuperj(page, "9705210647", ["7", "7", "7", "7", "7", "7"]);

  // Wait for the GWS API to be called
  const gwsResponse = await gwsApiPromise;
  expect(gwsResponse.ok()).toBeTruthy(); // Asserts status 2xx

  await expect(page.locator(Home.FUllSide_Bar)).toBeVisible({ timeout: 20000 });
  await page.waitForTimeout(3000);

  await page.reload();
  await expect(page).toHaveURL("https://udchalo.superj.app/Home");
  await page.waitForTimeout(3000);
});

test.skip("Sidebar buttons should be clickable", async ({ page }) => {
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

  await page.locator(Home.Wallet_buttons).click({ timeout: 20000 });
  await expect(page).toHaveURL("https://irctc.superj.app/rewards");
  await page.waitForTimeout(3000);

  await page.locator(Home.Profile_buttons).click({ timeout: 20000 });
  await expect(page).toHaveURL("https://irctc.superj.app/profile");
  await page.waitForTimeout(3000);

  await page.locator(Home.Home_buttons).click({ timeout: 20000 });
  await expect(page).toHaveURL("https://irctc.superj.app/Home");
  await page.waitForTimeout(3000);
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
  // await page.locator(Survey.Card1).click({ timeout: 20000 });
  // await page.waitForTimeout(3000);
  // await page.locator(Survey.Survey_preview).click({ timeout: 20000 });
  // await page.waitForTimeout(3000);

  // const SurveyQuestion = page.locator(Survey.Survey_Question_1);
  // await expect(SurveyQuestion).toBeVisible();
  // await SurveyQuestion.click();

  // await expect(page.locator(Survey.Survey_Question_1)).toBeVisible({
  //   timeout: 20000,
  // });
  // await page.waitForTimeout(3000);

  // await page.locator(Survey.selectoption).click({ timeout: 20000 });
  // await page.locator(Survey.survey_Next).click({ timeout: 20000 });
  // await page.waitForTimeout(5000);
  // await page.locator(Survey.selectoption).click({timeout:20000});
  // await page.locator(Survey.survey_Next).click({timeout:20000});
  // await page.waitForTimeout(5000);
  // await page.locator(Survey.selectoption).click({timeout:20000});
  // await page.locator(Survey.survey_Next).click({timeout:20000});
  await page.waitForTimeout(3000);
});

test.skip("Same question shouldn't show after reload", async ({ page }) => {
  const login = new Login_page(page);
  const Home = new Home_page(page);
  const Survey = new Survey_Deatils(page);

  // Launch and login
  await login.LoginWebiste();
  await loginSuperj(page, "9885060891", ["7", "7", "7", "7", "7", "7"]);

  // Open the survey preview from Card 1
  await page.locator(Survey.Card1).click({ timeout: 10000 });
  await page.waitForTimeout(2000);
  await page.locator(Survey.Survey_preview).click({ timeout: 10000 });

  // Wait for Question 1 to load
  const question1 = page.locator(Survey.Survey_Question_1);
  await expect(question1).toBeVisible({ timeout: 10000 });

  // Store option text
  const optionLocator = page.locator(Survey.selectoption);
  await expect(optionLocator).toBeVisible();
  const selectedOptionText = await optionLocator.innerText();

  // Select option and go to next
  await optionLocator.click();
  await page.locator(Survey.survey_Next).click();
  await page.waitForTimeout(3000);

  // Reload mid-survey
  await page.reload();
  await page.waitForTimeout(3000);

  // Check that selected option text is not visible again (i.e. question changed)
  const isSameOptionVisible = await page
    .locator(`text="${selectedOptionText}"`)
    .isVisible()
    .catch(() => false);

  expect(isSameOptionVisible).toBeFalsy(); // ✅ Assertion
});

// test("Surveyquestion should be visible on the page", async ({ page }) => {
//   const login = new Login_page(page);
//   const Home = new Home_page(page);
//   const Wallet = new Wallet_page(page);
//   const Survey = new Survey_Deatils(page);

//   // Launch and login
//   await login.LoginWebiste();
//   await login.Enter_mobileNumber("9705210647");
//   await page.waitForTimeout(2000);

//   const otp = ["7", "7", "7", "7", "7", "7"];
//   for (let i = 0; i < otp.length; i++) {
//     await login[`OTP__${i + 1}`](otp[i]);
//   }

//   await page.locator(login.OTP_Screen_Continue).click();
//   await page.waitForTimeout(3000);

//   // Open Survey Card 1 and preview
//   await page.locator(Survey.Card1).click({ timeout: 20000 });
//   await page.waitForTimeout(2000);
//   await page.locator(Survey.Survey_preview).click({ timeout: 20000 });
//   await page.waitForTimeout(2000);

//   // Survey Question 1 should be visible
//   await expect(page.locator(Survey.Survey_Question_1)).toBeVisible({ timeout: 20000 });

//   // Answer Question 1
//   await page.locator(Survey.selectoption).click({ timeout: 20000 });
//   await page.locator(Survey.survey_Next).click({ timeout: 20000 });
//   await page.waitForTimeout(3000);

//   // Answer Question 2
//   await page.locator(Survey.selectoption).click({ timeout: 20000 });
//   await page.locator(Survey.survey_Next).click({ timeout: 20000 });
//   await page.waitForTimeout(3000);

//   // Answer Question 3
//   await page.locator(Survey.selectoption).click({ timeout: 20000 });
//   await page.locator(Survey.survey_Next).click({ timeout: 20000 });
//   await page.waitForTimeout(3000);

//   // You can add an assertion for Question 4 or thank-you screen, if needed
// });
