const { expect } = require("@playwright/test");
const { time } = require("console");

exports.IE_page = class IE_page {
  constructor(page) { 
    this.page = page;

    // TOP buttons.
    this.IE_botton =
      "ul[class='flex gap-[56px]'] a[class='bold-16 cursor-pointer']";
    this.Pricing_button = "//a[normalize-space()='Pricing']";
    this.Resource_button = "//a[normalize-space()='Resources']";

    this.Earn_superj =
      ".Navbar_superjButton__PVXTb.Navbar_customBtn__skcPE.Navbar_btn11__x9Nbg";
    this.Login =
      "body > main:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)";
    this.Get_started = "//button[normalize-space()='Get started']";

    this.IE_Fullpage = "//section[@id='consumerresearchisfinallysimple']";

    this.email_field = "//input[@placeholder='Enter email address']";
    this.Re_captcha = "div[class='flex justify-center items-center md:mr-12']";
    this.SelectRe_captch ="//div[@class='recaptcha-checkbox-border']"
  }

  //Lunch the Browser
  async launch_IE() {
    await this.page.goto("https://insightengine.in/");
  }

  async IEbutton() {
    await this.page.loactor(this.IE_botton);
  }

  async Pricing() {
    await this.page.loactor(this.Pricing_button);
  }

  async Resource() {
    await this.page.loactor(this.Resource_button);
  }

  async EarnSuperJ() {
    await this.page.loactor(this.Earn_superj);
  }

  async TopLogin() {
    await this.page.loactor(this.Login);
  }

  async Getstarted() {
    await this.page.loactor(this.Get_started);
  }

  async FUllpage() {
    await this.page.loactor(this.IE_Fullpage);
  }

  async email() {
    await this.page.loactor(this.email_field);
  }

  async Recaptcha() {
    await this.page.loactor(this.Re_captcha);
  }

  async s_Recaptcha(){
    await this.page.loactor(this.SelectRe_captch);
  }
};
