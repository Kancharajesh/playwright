import { expect } from "playwright/test";

export class JM_page {
  //   readonly page;

  constructor(page) {
    this.page = page;

    //Navibar
    this.Home = page.locator(
      "(//a[@class='flex items-center pl-[20px] pr-[20px] h-full no-underline hover:text-fuchsia duration-300 text-fuchsia'])[1]"
    );
    this.About = page.locator(
      "(//a[@class='flex items-center pl-[20px] pr-[20px] h-full no-underline hover:text-fuchsia duration-300 text-white'][normalize-space()='ABOUT'])[1]"
    );
    this.DID = page.locator(
      "(//a[@class='flex items-center pl-[20px] pr-[20px] h-full no-underline hover:text-fuchsia duration-300 text-white'][normalize-space()='DID'])[1]"
    );
    this.Explorer = page.locator("//p[normalize-space()='EXPLORER']");
    this.EarnReward_withSuperj = page.locator(
      "(//p[@class='NavbarOther_lexendText__uhggk __className_3fff20'])[1]"
    );
    this.DID_Count = page.locator(
      "(//div[@class='DidCounter_counterContainer__zpwWl'])[1]"
    );
  }

  async launchjupitermeta() {
    await this.page.goto("https://jupitermeta.io/");
  }

  async Click_Home() {
    await this.Home.click();
  }

  async Click_About() {
    await this.About.click();
  }

  async Click_DID() {
    await this.DID.click();
  }

  async Click_EXPLORER() {
    await this.Explorer.click();
  }

  async Click_SuperJ() {
    await this.EarnReward_withSuperj.click();
  }

  async scrollToAndVerifyDIDCount() {
    await this.DID_Count.scrollIntoViewIfNeeded();
    await expect(this.DID_Count).toBeVisible({ timeout: 10000 });
    return this.DID_Count;
  }
}
