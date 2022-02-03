const { By, until, Browser } = require("selenium-webdriver");
const { chromeDriver } = require("../Utils/drivers");

let i = 30;

async function roboTestCountDown() {
  try {
    await chromeDriver.switchTo().frame(0);
    let human = await chromeDriver.wait(
      until.elementLocated(By.xpath("//div[@id='captcha-submit']")),
      1000
    );
    if (human != null) {
      console.log("There is reCAPTCHA to handle");
      console.log("Hello! You have 30s to prove you are NOT a robot");
      let countdownTimer = setInterval(async function () {
        console.log(i);
        i = i - 1;
        if (i <= 0) {
          clearTimeout(countdownTimer);
        }
      }, 1000);
      await chromeDriver.sleep(31000);
    } else {
      await chromeDriver.switchTo().defaultContent();
    }
  } catch (error) {
    console.log(`reCAPTCHA page ERROR ${error}`);
  }
}

module.exports = { roboTestCountDown };
