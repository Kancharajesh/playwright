import {test, expect}  from "@playwright/test";
import { time } from "console";

exports.Wallet_page = class Wallet_page {

    constructor (page) {
        this.page = page;

        // Wallet page is displayed.
        this.WalletFullpage = "body > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)";

        //Wallet button Click.
        this.wallet_button = "(//li[@class='Sidebar_menuItem__v2_1I '])[1]"

        // cashOut button.
        this.Cashout_botton ="//button[normalize-space()='Cash Out']";

        // coupon and giftcard.
        this.Recent_coupon = ".TabCouponsGift_navItem__g5DRD.TabCouponsGift_active__Yk9jh";
        this.MyGift_cards = "p[class='TabCouponsGift_navItem__g5DRD ']";

        // Empty state.
        this.Redeemed_Coupons = "//div[@class='RecentCoupons_couponsGrid__7hCa3']";
        this.Redeemed_giftcards = "//div[@class='Gift_sizing__mL1oH']";
        this.MyGift_cards_empty = ".Gift_container__UfEFq";
        this.Giftcard_empty_state = "//div[@class='GiftCardEmptyState_emptyContainer__S_sdt']";
       
        //Recent Coupons Visiable.
        this.Recentcoupons = ".RecentCoupons_couponsGrid__7hCa3";

        //Cashout - cashInfo.
        this.Cashout_cashInfo = ".CashBalance_container__NaEu_.undefined";

        //Cash
        this.Cashbalance = "//p[@class='CashBalance_balanceText__yQJ_O']";

        this.Redeem_giftcards = ".GiftCardsComponent_gridContainer__3z9Ne";
    }

    async Wallet_fullpage (){
        await this.page.locator(this.WalletFullpage);
    }

    async Walletbutton (){
        await this.page.locator(this.wallet_button).click();
    }

    async Cashoutbutton () {
        await this.page.locator(this.Cashout_botton);
    }

    async Recentcouponss () {
        await this.page.locator(this.Recent_coupon).click();
    }

    async Giftcard () {
        await this.page.locator(this.MyGift_cards).click();
    }

    async coupons () {
        await expect(this.page.locator(this.Recentcoupons)).toBeVisible();
    }

    async cashinfo () {
        await expect(this.page.locator(this.Cashout_cashInfo)).toBeVisible();

    }

    async Giftcard_empty(){
        await this.page.locator(this.MyGift_cards_empty);
    }

    async redeem (){
        await this.page.locator(this.Redeem_giftcards);
    }

    async Cash_Balance (){
        await this.page.locator(this.Cashbalance);
    }

    async Empty_state () {
        await this.page.locator(this.Giftcard_empty_state);
    }

    async Redeemed_giftcardsss (){
        await this.page.locator(this.Redeemed_giftcards);
    }

    async Redeemed_Couponss (){
        await this.page.locator(this.Redeemed_Coupons);
    }
}