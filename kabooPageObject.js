'use strict';

var KabooPageObject = function () {

    //elements to access
    var username = element(by.css('[name="username"]'));
    var password = element(by.css('[name="password"]'));
    var loginButton = element(by.id('submitLogin'));


    this.navigateToURL = function (url) {
        browser.get(url)
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

};

module.exports = KabooPageObject;
