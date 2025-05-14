const { expect } = require("@playwright/test");


exports.Profile_page = class Profile_page {

    constructor(page){
        
        this.page = page;

        //Profile button.
        this.profilebutton= "//img[@alt='Profile']";

        // full Profile page view.
        this.Fullprofilepage = "(//div)[16]";

        // Check DID.
        this.DID = "(//div)[20]";

        //Select Edit profile.
        this.EditProfile = "(//button[normalize-space()='Edit'])[1]";

        //Help & Support.
        this.Help_support = "(//p[normalize-space()='Help and support'])[1]";

        //Contact Us.
        this.ContactUS = "(//button[normalize-space()='Contact Us'])[1]";
        this.ContactUs_inputField = "textarea[placeholder='Enter your question here']";
        this.ContactUS_Save = "//button[normalize-space()='Send']";

        //Transaction Histort view all.
        this.View_All = "//button[normalize-space()='View All']";

        this.History_Coupon = "(//p[normalize-space()='Coupons'])[1]";
        this.History_Cash = "(//p[@class='transaction-history-desktop_navItem__NFbte '])[1]";
        
        //All COupons
        this.History_allcoupons = "//div[@class='Coupons_mainPage__qGQBV']";
        this.History_allCash = "(//div[@class='Cash_mainPage__Xu8sK'])[1]";

        this.Historybacktoprofile = "img[alt='back icon']";


        // Logout.
        this.Logout = "//button[normalize-space()='Logout']";

        this.Logout_yes = "//button[@class='logout_deleteButton__hVHfW']";
        this.Logout_cancel = "//button[normalize-space()='Cancel']";



    }

    async Profilebtton () {
        await this.page.locator(this.profilebutton);
    }

    async profilepageview (){
        await this.page.locator(this.Fullprofilepage);
        await expect(this.page.locator(this.Fullprofilepage)).toBeVisible();
    }

    async checkDID() {
        await expect(this.page.locator(this.DID)).toBeVisible();
    }

    async clickEditProfile() {
        await this.page.locator(this.EditProfile).click();
    }

    async openHelpAndSupport() {
        await this.page.locator(this.Help_support).click();
    }

    async ContactSupport(message) {
        await this.page.locator(this.ContactUS).click();
        await this.page.locator(this.ContactUs_inputField).fill(message);
        await this.page.locator(this.ContactUS_Save).click();
    }

    async viewTransactionHistory() {
        await this.page.locator(this.View_All).click();
    }

    async switchToCouponHistory() {
        await this.page.locator(this.History_Coupon);
         
    }

    async switchToCashHistory() {
         await this.page.locator(this.History_Cash);
   }

   async allCoupons () {
    await this.page.locator(this.History_allcoupons);
   }

   async allcash () {
    await this.page.locator(this.History_allCash);
   }

    async goBackToProfile() {
        await this.page.locator(this.Historybacktoprofile).click();
    }

    async LOgout (){
        await this.page.locator(this.Logout);
    }

    async Logout_yess(){
        await this.page.locator(this.Logout_yes);
    }

    async logCancel (){
        await this.page.locator(this.Logout_cancel);
    }
        
}