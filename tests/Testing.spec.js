// import { test, expect, devices } from "@playwright/test";
// import { Mobileelements_page } from "../Pages/Mobileelements_page";
// import {Login_page} from "../Pages/Login_Page";

// test.use({ ...devices["Pixel 5"] });

// test("Test login", async({page})=>{
//     const Mobile = new Mobileelements_page(page);
//     const Login = new Login_page(page);

//     await page.goto("https://superj.app/survey/6874e41fe0804a1f7919277a?utm_source=app&utm_medium=bafybmibvceochztgkqlr66jvglnzsbuvb2ahf6ibnd72ldtbbi2u3ko2xm&utm_campaign=brand_referral");

//     await page.waitForTimeout(5000);

//     await page.fill('input[type="tel"]', '9876543210'); 

//     await page.waitForTimeout(3000);

//     const getOtpButton = page.getByRole("button", { name: "Get OTP" });
//     await getOtpButton.click();
//     await getOtpButton.click();

//     await page.waitForTimeout(30000);

// });
