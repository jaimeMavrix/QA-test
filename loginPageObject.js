'use strict';

var LoginPageObject = function () {

    var baseLoginUrl        = "https://kaboo:flappybird@qatest.staging.kaboo.com/en/login";
    var loginUrl            = "https://qatest.staging.kaboo.com/en/login";
    var username            = element(by.css('[name="username"]'));
    var password            = element(by.css('[name="password"]'));
    var loginButton         = element(by.id('submitLogin'));
    var messageLoginSuccess = element(by.xpath(".//*[contains(text(),'hi')]"));

    this.openLoginUrl = function () {
        browser.driver.get(baseLoginUrl);
        browser.driver.get(loginUrl);
        browser.waitForAngular();
    };

    this.setUsername = function (user) {
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass);
    };

    this.login = function () {
        loginButton.click();
    };

    this.successMessage = function () {
        browser.wait(function() {
            return messageLoginSuccess.isPresent();
        }, 5000);
    };
};

module.exports = LoginPageObject;