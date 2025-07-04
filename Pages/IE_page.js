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
  
    // Resources page elements.
    this.Case_study = "//button[normalize-space()='Case Study']";
    this.Case_study_visible = "//div[@class='BlogCard_galleryStyle__wDzjN']";
    
    this.Insight_report = "//button[normalize-space()='Insight Report']";
    this.Insight_report_visible = "//div[@class='HeroComponent_reportlistcomponent__CknHe']";

    this.Bite_size_snippets = "//button[normalize-space()='Bite size snippets']";
    this.Bite_size_snippets_reports = "//div[@class='BiteSizeSnippets_imgcontainer__BJ_G0']";

    this.Blogs = "//button[normalize-space()='Blogs']";
    this.Blogs_visible = "//div[@class='BlogCard_galleryStyle__wDzjN']";
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

  async ClickCasestudy () {
    await this.page.locator(this.Case_study).click();
  }

  async Case_studypage_visible (){
    await expect(this.page.locator(this.Case_study_visible)).toBeVisible();
  }

  async clickInsight_report (){
    await this.page.locator(this.Insight_report).click();
  }

  async Insightpage_visible(){
    await expect(this.page.locator(this.Insight_report_visible)).toBeVisible();
  }

  async ClickBite_size_snippets (){
    await this.page.locator(this.Bite_size_snippets).click();
  }

  async Bite_size_snippets_visible (){
    await expect(this.page.locator(this.Bite_size_snippets_reports)).toBeVisible();
  }

  async click_Blogs (){
    await this.page.locator(this.Blogs).click();
  }

  async Blogs_page_visible(){
    await expect(this.page.locator(this.Blogs_visible)).toBeVisible();
  }

}

module.exports = { IE_page };
