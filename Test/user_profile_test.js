const { after, before } = require("mocha");
const { Users } = require("../Data/users");
const { roboTestCountDown } = require("../Utils/robot_verification");
const { Utils } = require("../Utils/utils");
const { loginPageUsage } = require("../Utils/login_page");
const { userProfileUsage } = require("../Utils/user_profile_page");
let firstName = Users.firstName;
let userName = Users.userName;
let password = Users.password;

describe("login and check user profile", function () {
  before(async function () {
    // launch the browser
    let loginInstance = new loginPageUsage();
    await loginInstance.openTheFork();

    // add cookie
    let addcookies = new Utils();
    await addcookies.addCookieFork();
  });

  after(async function () {
    let loginInstance = new loginPageUsage();
    // quite browser
    await loginInstance.quitChrome();
  });

  it("login and check the user profile information", async function () {
    let userProfileInstance = new userProfileUsage();
    let loginInstance = new loginPageUsage();
    // check if we have reCAPTCHA page to handle
    //if there is we will have 30s count down to pass reCAPTCHA manually
    await roboTestCountDown();
    // click login button
    await loginInstance.clickLoginButton();
    // insert the username
    await loginInstance.insertUsername(userName);
    // click continue button
    await loginInstance.pressContinueButtonAfterUsername();
    // insert password
    await loginInstance.insertPassword(password);
    // click continue button
    await loginInstance.pressContinueButtonAfterPassword();
    // open personal infromation page
    await userProfileInstance.openPersonalInfo();
    // firstname validation
    await userProfileInstance.firstNameValidation(firstName);
    // lastname validation
    await userProfileInstance.lastNameValidation(lastName);
    // phone number validation
    await userProfileInstance.phoneNumberValidation(phoneNumber);
    // email validation
    await userProfileInstance.emailValidation(email);
  });
});
