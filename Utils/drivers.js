const { Builder } = require("selenium-webdriver");
const { Browsers } = require("../Data/browsers");

let chromeBrowser = Browsers.Chrome;

let chromeDriver = new Builder().forBrowser(chromeBrowser).build();

module.exports = { chromeDriver };
