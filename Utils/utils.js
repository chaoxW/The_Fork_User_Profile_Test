const { cookieManage } = require("../Data/manage_cookie");
const { chromeDriver } = require("../Utils/drivers");
const { By, until } = require("selenium-webdriver");
const cookieName = cookieManage.cookie_name;
const cookieValue = cookieManage.cookie_value;

class Utils {
  constructor() {}
  async addCookieFork() {
    //add cookie
    await chromeDriver.manage().addCookie({
      name: cookieName,
      value: cookieValue,
    });
    console.log(`add cookie ${cookieName}`);
    chromeDriver.navigate().refresh();
  }

  async getElementByID(id) {
    try {
      let element = await chromeDriver.wait(
        until.elementLocated(By.id(id)),
        1000
      );
      return element;
    } catch (error) {
      console.log(`Can not find element by ID the ERROR is ${error}`);
    }
  }

  async getElementByXpath(xpath) {
    try {
      let element = await chromeDriver.wait(
        until.elementLocated(By.xpath(xpath)),
        1000
      );
      return element;
    } catch (error) {
      console.log(`Can not find element by xpath the ERROR is ${error}`);
    }
  }
}

module.exports = { Utils };
