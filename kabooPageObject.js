'use strict';

var KabooPageObject = function () {

    //elements to access
    var username = element(by.css('[name="username"]'));
    var password = element(by.css('[name="password"]'));
    var loginButton = element(by.id('submitLogin'));
    var errorMessage = element(by.xpath(".//div[@class='m-site-notification__item is-current']"));

    // muuda see lehekülg (klass) KabooPageObject KabooLoginPageObject.
    //  navigate to login url ja

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
    this.errorMessageDisplayed = function () {
        browser.wait(function() {
            return errorMessage.isPresent();
        }, 5000);
        //errorMessage.isDisplayed();
    };

};

module.exports = KabooPageObject;
