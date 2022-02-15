const { chromeDriver } = require("../Utils/drivers");
const { Utils } = require("../Utils/utils");

let i = 30;
let utils = new Utils();

async function roboTestCountDown() {
  try {
    await chromeDriver.switchTo().frame(0);
    let human = await utils.getElementByXpath("//div[@id='captcha-submit']");
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
