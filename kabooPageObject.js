'use strict';

var KabooPageObject = function () {

    //elements to access
    var username = element(by.css('[name="email"]'));
    var password = element(by.css('[name="pwd"]'));
    var loginButton = element(by.css('.e-btn'));


    this.navigateToURL = function (url) {
        browser.get(url)
    };

    this.setUsername = function (user) {
        username.sendKeys('kaboo');
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass);
    };

    this.login = function () {
        loginButton.click();
    };

};

module.exports = KabooPageObject;