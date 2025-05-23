const { expect } = require("@playwright/test");

class IE_page {
  constructor(page) {
    this.page = page;

    // Top navigation
    this.IE_botton = "ul.flex.gap-[56px] a.bold-16.cursor-pointer";
    this.Pricing_button = "//a[normalize-space()='Pricing']";
    this.Resource_button = "//a[normalize-space()='Resources']";
    this.Earn_superj = ".Navbar_superjButton__PVXTb.Navbar_customBtn__skcPE.Navbar_btn11__x9Nbg";
    this.Login = "nav ul li:nth-child(2)";
    this.Get_started = "//button[normalize-space()='Get started']";

    // Sections
    this.IE_Fullpage = "//section[@id='consumerresearchisfinallysimple']";
    this.Pricing_fullpage = "//div[@class='Pricing_pricingContainer__Rjw5h']";

    // Resourece.
    this.Resource_fullpage = ".HeroComponent_textContainer__YiHDJ";

    // Inputs
    this.email_field = "//input[@placeholder='Enter email address']";
    this.Re_captcha = "div.flex.justify-center.items-center.md\\:mr-12";
  }

  async launch_IE() {
    await this.page.goto("https://insightengine.in/");
  }

  async clickPricing() {
    await this.page.locator(this.Pricing_button).click();
  }

  async isPricingPageVisible() {
    await expect(this.page.locator(this.Pricing_fullpage)).toBeVisible();
  }

  async isFullPageVisible() {
    await expect(this.page.locator(this.IE_Fullpage)).toBeVisible({ timeout: 20000 });
  }

  async fillEmailField(email) {
    await this.page.locator(this.email_field).scrollIntoViewIfNeeded();
    await this.page.locator(this.email_field).fill(email);
  }

  async verifyRecaptchaVisible() {
    await expect(this.page.locator(this.Re_captcha)).toBeVisible();
  }

  async clickResources(){
    await this.page.locator(this.Resource_button).click();
  }

  async isResourecesPageVisible (){
    await expect(this.page.locator(this.Resource_fullpage)).toBeVisible();
  }

}

module.exports = { IE_page };
