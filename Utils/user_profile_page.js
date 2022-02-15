const { chromeDriver } = require("../Utils/drivers");
const assert = require("assert");
const { userProfilePage } = require("../Data/user_profile_page_locators");
const { Utils } = require("../Utils/utils");
const personalInfoButton = userProfilePage.personal_info_button_xpath;
const personalFirstname = userProfilePage.personal_firstname_xpath;
const personalLastname = userProfilePage.personal_lastname_xpath;
const personalPhone = userProfilePage.personal_phone_xpath;
const personalEmail = userProfilePage.personal_email_xpath;

let utils = new Utils();

class userProfileUsage {
  constructor() {}
  async openPersonalInfo() {
    let personalInformationButton = await utils.getElementByXpath(
      personalInfoButton
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
    let personalPageFirstName = await utils.getElementByXpath(
      personalFirstname
    );
    let personalPageNameValue = await personalPageFirstName
      .getAttribute("value")
      .then(function (value) {
        return value;
      });
    console.log(`personal page firstname value is ${personalPageNameValue}`);
    assert.strictEqual(personalPageNameValue, name);
  }

  async lastNameValidation(name) {
    let personalPageName = await utils.getElementByXpath(personalLastname);
    let personalPageNameValue = await personalPageName
      .getAttribute("value")
      .then(function (value) {
        return value;
      });
    console.log(`personal page lastname value is ${personalPageNameValue}`);
    assert.strictEqual(personalPageNameValue, name);
  }

  async phoneNumberValidation(name) {
    let personalPagePhone = await utils.getElementByXpath(personalPhone);
    let personalPagePhoneValue = await personalPagePhone
      .getAttribute("value")
      .then(function (value) {
        return value;
      });
    console.log(`personal page lastname value is ${personalPagePhoneValue}`);
    assert.strictEqual(personalPagePhoneValue, name);
  }

  async emailValidation(name) {
    let personalPageEmail = await utils.getElementByXpath(personalEmail);
    let personalPageEmailValue = await personalPageEmail
      .getAttribute("value")
      .then(function (value) {
        return value;
      });
    console.log(`personal page lastname value is ${personalPageEmailValue}`);
    assert.strictEqual(personalPageEmailValue, name);
  }
}

module.exports = { userProfileUsage };
