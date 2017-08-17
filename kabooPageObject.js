'use strict';

var KabooPageObject = function () {

    //elements to access
    var username = element(by.css('[name="username"]'));
    var password = element(by.css('[name="password"]'));
    var loginButton = element(by.id('submitLogin'));
    var messageLoginSuccess = element(by.xpath(".//*[contains(text(),'hi')]"));
    var messageLoginFailed = element(by.xpath(".//*[contains(text(),'failed')]"));


    this.openLoginUrl = function () {
        browser.driver.get(loginUrl);
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
    this.failedMessage = function () {
        browser.wait(function() {
            return messageLoginFailed.isPresent();
        }, 5000);
    };

};

module.exports = KabooPageObject;
