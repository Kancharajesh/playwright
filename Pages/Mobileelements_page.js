const { expect } = require("@playwright/test");

exports.Mobileelements_page = class Mobileelements_page {
  constructor(page) {
    this.page = page;

    // HomePage
    this.MHome_page = "/html/body/div[1]/div[1]/main/div[1]/div[1]/div[3]/div[1]/div[1]";
    this.MHome_button = ".flex.items-center.relative.flex-col.clickable-effect";
    this.MWallet_button = "//a[@class='flex flex-col items-center clickable-effect']";
    this.Profile_button = "//img[@alt='profile icon']";

    // Wallet page
    this.Wallet_fullpageview = "(//div[contains(@class,'min-h-screen bg-[#F4F8F8] pt-[0px]')])[1]";
    this.CashBalance_info = ".CashBalanceComponent_container__C2GjL";
    this.Cashout_button = ".CashBalanceComponent_cashoutButton__Yzgyy.clickable-effect";
    this.Cashout_Giftcards = ".GiftCardsComponent_view10__VxszM";
    this.Cashout_backbutton = "body > div:nth-child(7) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1)";

    // My Gift Cards
    this.My_Giftcards_viewall = ".MyGiftCardsComponent_button__LXZTd.clickable-effect";
    this.My_Giftcards = ".MyGiftCards_container__5OYta";
    this.My_Giftcard_backbutton = "body > div:nth-child(7) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1)";

    // Coupons
    this.coupons_visible = ".RecentCouponsComponent_container__tkT1H";
    this.Recent_coupon_viewall = ".RecentCouponsComponent_buttonText__txFKM";
    this.Recent_all_coupons = ".MyCoupons_container__n3XcM";
    this.Recent_coupon_backbutton = "div[class='w-full max-w-screen-md'] div:nth-child(1)";

    // Profile page
    this.Profile_fullview = ".profile_container__CYebx";
  }

  // ---------- Homepage ----------
  async gotoHomePage() {
    await this.page.locator(this.MHome_page).scrollIntoViewIfNeeded();
  }

  async clickHomeButton() {
    await this.page.locator(this.MHome_button).click();
  }

  async clickWalletButton() {
    await this.page.locator(this.MWallet_button).click();
  }

  async clickProfileButton() {
    await this.page.locator(this.Profile_button).click();
  }

  // ---------- Wallet ----------
  async isWalletPageVisible() {
    await expect(this.page.locator(this.Wallet_fullpageview)).toBeVisible();
  }

  async clickCashout() {
    await this.page.locator(this.Cashout_button).click();
  }

  async isGiftCardsVisible() {
    await expect(this.page.locator(this.Cashout_Giftcards)).toBeVisible();
  }

  async clickCashoutBackButton() {
    await this.page.locator(this.Cashout_backbutton).click();
  }

  // ---------- My Gift Cards ----------
  async viewAllGiftCards() {
    await this.page.locator(this.My_Giftcards_viewall).click();
  }

  async isMyGiftCardsVisible() {
    await expect(this.page.locator(this.My_Giftcards)).toBeVisible();
  }

  async clickGiftCardBackButton() {
    await this.page.locator(this.My_Giftcard_backbutton).click();
  }

  // ---------- Coupons ----------
  async isCouponsVisible() {
    await expect(this.page.locator(this.coupons_visible)).toBeVisible();
  }

  async viewAllCoupons() {
    await this.page.locator(this.Recent_coupon_viewall).click();
  }

  async isAllCouponsVisible() {
    await expect(this.page.locator(this.Recent_all_coupons)).toBeVisible();
  }

  async clickCouponBackButton() {
    await this.page.locator(this.Recent_coupon_backbutton).click();
  }

  // ---------- Profile ----------
  async isProfileVisible() {
    await expect(this.page.locator(this.Profile_fullview)).toBeVisible();
  }
};
