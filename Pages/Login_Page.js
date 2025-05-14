const { expect } = require("@playwright/test"); 

exports.Login_page = class Login_page {

    constructor(page) {
        this.page = page;
 
        //Welcome Page.
        this.loginButton = '.Navbar_link__9Nm3x';

        // Mobile Number Screen.
        this.Mobilenumber_input_filed= '#phone';
        this.Mobilenumber_Continue_button= "button[type='submit']";

        // OTP screen.
        this.OTPScreen_Displayed = ".SignupModal_body__p_qbJ";

        // OTP Input Elements.
       // OTP Input Elements (use actual selectors like input[placeholder="..."])
       this.OTP1 = "//input[@aria-label='Please enter OTP character 1']";
       this.OTP2 = "//input[@aria-label='Please enter OTP character 2']";
       this.OTP3 = "//input[@aria-label='Please enter OTP character 3']";
       this.OTP4 = "//input[@aria-label='Please enter OTP character 4']";
       this.OTP5 = "//input[@aria-label='Please enter OTP character 5']";
       this.OTP6 = "//input[@aria-label='Please enter OTP character 6']";


        // OTP screen Continue Button.
        this.OTP_Screen_Continue = "//button[@type='submit']";

        // Resend OTP.
        this.Resend_OTP = ".SignupModal_sendAgainText__LbfQ_";

        // Incoreect OTP text.
        this.Incorrect_OTP_Text = ".SignupModal_errorTextOtp__7jrQU";
   
        // HoMe Page
        this.Homepage = "(//div[@class='no-scrollbar'])[1]";
    }


    // Lunch the website.
    async LoginWebiste(){
        await this.page.goto("https://irctc.superj.app/Welcome");
    }

    // Mobile Number Screen.
     async Enter_mobileNumber(mobilenumber){
     await   this.page.locator(this.loginButton).click();
     await   this.page.locator(this.Mobilenumber_input_filed).fill(mobilenumber);
     await   this.page.locator(this.Mobilenumber_Continue_button).click();
    }

    // OTP Input fields.
    async OTP__1 (OTP1){
        await this.page.locator(this.OTP1).fill(OTP1)
    }

    async OTP__2 (OTP2){
        await this.page.locator(this.OTP2).fill(OTP2)
    }

    async OTP__3 (OTP3){
        await this.page.locator(this.OTP3).fill(OTP3)
    }

    async OTP__4 (OTP4){
        await this.page.locator(this.OTP4).fill(OTP4)
    }

    async OTP__5 (OTP5){
        await this.page.locator(this.OTP5).fill(OTP5)
    }

    async OTP__6 (OTP6){
        await this.page.locator(this.OTP6).fill(OTP6)
    }

    // OTP_Screen_displayed.
    async OTP_screen_Visiable(){
        await expect(this.page.locator(this.OTPScreen_Displayed)).toBeVisible({timeout:20000});
    }

    // OTP Screen Continue
    async OTPScreenContinue (){
        await this.page.locator(this.OTP_Screen_Continue).click();
    }

    
    // Home page
    async Homepageclear_ISvidable() {
        await expect(this.page.locator(this.Homepage)).toBeVisible({ timeout: 200000 });
    }


    
    
    //     await expect(this.page.locator(otpInputs[index])).toBeVisible();
    //     await this.page.locator(otpInputs[index]).fill(value);
    // }

    // At the bottom of Login_Page.js

    // async loginWithValidOTP(mobile = '9885060891', otp = '777777') {
    //     await this.Enter_mobileNumber(mobile);
    //     await this.page.waitForTimeout(1000);
    //     await this.OTP_screen_Visiable();
      
    //     // Split OTP and enter each digit
    //     await this.OTP__1(otp[0]);
    //     await this.OTP__2(otp[1]);
    //     await this.OTP__3(otp[2]);
    //     await this.OTP__4(otp[3]);
    //     await this.OTP__5(otp[4]);
    //     await this.OTP__6(otp[5]);
      
    //     await this.page.waitForTimeout(1000);
    //     await this.page.locator(this.OTP_Screen_Continue).click();
    //     await this.page.waitForTimeout(2000);
    //   }
      

}