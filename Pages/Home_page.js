const { expect } = require("@playwright/test");

exports.Home_page = class Home_page {

    constructor(page) {
        this.page = page; 

    //Side Bar.
     this.Home_buttons = "img[alt='Home']";
     this.Wallet_buttons = "img[alt='Wallet']";
     this.Profile_buttons = "img[alt='Profile']";

     this.FUllSide_Bar = ".Sidebar_sidebar__v6daX";

     // all 12 Survey care showing.
     this.First_survey_card = "(//div[@class='SurveyCard_cardContainer__9fG_1'])[1]";

     this.Surveys_screen = "(//div)[21]";
     

}   


    async launchthebrowser () {
        await this.page.goto('https://irctc.superj.app/Welcome');
    }

    async Home() {
        await this.page.locator(this.Home_buttons);
    }

    async Wallet() {
        await this.page.locator(this.Wallet_buttons);
    }

    async Profile() {
        await this.page.locator(this.Profile_buttons);
    }

    async FUllSideBar (){
        await this.page.locator(this.FUllSide_Bar);
    }


    // Survey Cards.
    async surveycards_Homepage (){
        await this.page.locator(this.First_survey_card);
    }

    async surveysscreen (){
        await this.page.locator(this.Surveys_screen);
    }
    

}
