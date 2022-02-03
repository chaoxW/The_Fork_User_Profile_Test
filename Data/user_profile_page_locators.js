let userProfilePage = {
  personal_info_button_xpath:
    "//button[@aria-controls='user-space-user-information']",
  personal_firstname_xpath: "//input[@name='firstName']",
  personal_lastname_xpath: "//input[@name='lastName']",
  personal_phone_xpath: "//input[@name='phoneNumber.nationalNumber']",
  personal_email_xpath: "//input[@name='email']",
};
module.exports = { userProfilePage };
