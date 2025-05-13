const {test, expect } = require("@playwright/test");

exports.Survey_Deatils = class Survey_Deatils {

    constructor(page){
            this.page = page;

        // first Survey card
        this.Card1 = "body > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";

        // Survey Preview screen.
        this.Survey_preview = ".preview_startSurveyButton__oAeLD";

        // Questions.
        this.Survey_Question_1 = "(//div[@class='SurveyScreenDesktop_carouselItem__AQ64P'])[1]";

        // Select option 1
        this.Survey_option_1 = "(//div)[28]";

        //survey bottom next.
        this.survey_Next  = "//button[normalize-space()='Next']";

        this.selectoption = "//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]";


    }

    async First_survey (){
        await this.page.locator(this.Card1);
    }

    async Surveyscreen () {
        await this.page.locator(this.Survey_preview);
    }

    async SurveyQueston1 (){
        await this.page.locator(this.Survey_Question_1);
    }

    async Surveyoption1 () {
        await this.page.locator(this.Survey_Question_1);
    }

    async Surveynext () {
        await this.page.locator(this.survey_Next);
    }

    async Select_opt (){
        await this.page.locator(this.selectoption);
    }

}