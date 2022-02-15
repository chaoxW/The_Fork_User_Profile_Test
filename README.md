# Folder Structure

    .
    ├── Utils
    │   ├── drivers.js
    │   │   └── manage the drivers
    │   ├── login_page.js
    │   │   └── Manage the class for login page
    │   ├── robot_verification.js
    │   │   └── Manage if there is reCAPTCHA to do manually verification
    │   ├── user_profile_page.js
    │   │   └── Manage the class for user profile page
    │   └── utils.js
    │       └── Manage the utils class
    ├── Data
    │   ├── browsers.js
    │   │   └── manage the browsers like Chrome
    │   ├── login_page_locators.js
    │   │   └── manage the locators for login page
    │   ├── manage_cookie.js
    │   │   └── manage the cookies for the website
    │   ├── urls.js
    │   │   └── manage the urls
    │   ├── user_profile_page_locators.js
    │   │   └── manage the locators for user profile page
    │   └── users.js
    │       └── manage the users data
    ├── Test
    │   └── user_profile_test.js - Test file in JS
    └── package.json - Configuration for scripts and dependencies

# Run
Run test with `npm test` from command  
if you see   
**There is reCAPTCHA to handle**  
from log  
you will have 30s to finish reCAPTCHA validation manually and there will be a count down from log  
if there is no reCAPTCHA you do not have to do it  
you can see the demo from here  
https://drive.google.com/file/d/11nQN2UlWztTNv-NXarfr4HLArWrIr7Mb/view?usp=sharing
