const { cookieManage } = require("../Data/manage_cookie");
const { chromeDriver } = require("../Utils/drivers");
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
}

module.exports = { Utils };
