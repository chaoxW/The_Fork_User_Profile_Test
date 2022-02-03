const { By, until } = require("selenium-webdriver");
const { chromeDriver } = require("../Utils/drivers");
const assert = require("assert");
const { userProfilePage } = require("../Data/user_profile_page_locators");
const personalInfoButton = userProfilePage.personal_info_button_xpath;
const personalName = userProfilePage.personal_name_xpath;

class userProfileUsage {
  constructor() {}
  async openPersonalInfo() {
    let personalInformationButton = await chromeDriver.wait(
      until.elementLocated(By.xpath(personalInfoButton)),
      1000
    );
    try {
      await personalInformationButton.click();
      console.log("click personal Information Button");
      await chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`personal Information Button ERROR ${error}`);
    }
  }

  async firstNameValidation(name) {
    let personalPageName = await chromeDriver.wait(
      until.elementLocated(By.xpath(personalName)),
      1000
    );
    let personalPageNameValue = await personalPageName
      .getAttribute("value")
      .then(function (value) {
        return value;
      });
    console.log(`personal page name value is ${personalPageNameValue}`);
    assert.strictEqual(personalPageNameValue, name);
  }
}

module.exports = { userProfileUsage };
