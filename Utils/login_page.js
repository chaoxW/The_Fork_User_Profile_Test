const { By, until } = require("selenium-webdriver");
const { loginPage } = require("../Data/login_page_locators");
const { Urls } = require("../Data/urls");
const { chromeDriver } = require("../Utils/drivers");
const loginButtonHomePage = loginPage.login_button_xpath;
const emailField = loginPage.email_input_id;
const emailContinueButton = loginPage.email_continue_button_xpath;
const passwordField = loginPage.password_input_xpath;
const passwordContinueButton = loginPage.password_continue_button_xpath;
const url = Urls.baseURL;

class loginPageUsage {
  constructor() {}
  async openTheFork() {
    await chromeDriver.get(url);
    console.log("Open the fork Url");
  }

  async quitChrome() {
    await chromeDriver.quit();
  }

  async clickLoginButton() {
    let loginButton = await chromeDriver.wait(
      until.elementLocated(By.xpath(loginButtonHomePage)),
      1000
    );
    try {
      await loginButton.click();
      console.log("Click login button");
      chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`login button ERROR ${error}`);
    }
  }

  async insertUsername(username) {
    let emailInput = await chromeDriver.wait(
      until.elementLocated(By.id(emailField)),
      1000
    );
    try {
      emailInput.sendKeys(username);
      console.log(`the username is inserted as ${username}`);
      await chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`insert username ERROR ${error}`);
    }
  }

  async pressContinueButtonAfterUsername() {
    let continueButtonUserName = await chromeDriver.wait(
      until.elementLocated(By.xpath(emailContinueButton)),
      1000
    );
    try {
      continueButtonUserName.click();
      console.log("Click continue button after insert username");
      await chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`Click continue button ERROR ${error}`);
    }
  }

  async insertPassword(password) {
    let passwordInput = await chromeDriver.wait(
      until.elementLocated(By.xpath(passwordField)),
      1000
    );
    try {
      await passwordInput.sendKeys(password);
      console.log("password is inserted");
      await chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`Insert password ERROR ${error}`);
    }
  }

  async pressContinueButtonAfterPassword() {
    let continueButtonPass = await chromeDriver.wait(
      until.elementLocated(By.xpath(passwordContinueButton)),
      1000
    );
    try {
      await continueButtonPass.click();
      console.log("click continue button after insert password");
      await chromeDriver.sleep(1000);
    } catch (error) {
      console.log(`Click continue button ERROR ${error}`);
    }
  }
}
module.exports = { loginPageUsage };
