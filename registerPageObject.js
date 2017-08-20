'use strict';

var RegisterPageObject = function () {

    var baseLoginUrl    = "https://kaboo:flappybird@qatest.staging.kaboo.com/en/login";
    var registerUrl     = "https://qatest.staging.kaboo.com/en/signup";
    var fillEmail       = element(by.css('[name="email"]'));
    var username        = element(by.css('[name="username"]'));
    var password        = element (by.xpath('.//input[@name=\'password\']'));
    var passwordRepeat  = element (by.xpath('.//input[@name=\'passwordRepeat\']'));
    var checkbox        = element (by.xpath(".//*[contains(text(),'read')]"));
    var next            = element (by.xpath(".//button[@class='e-btn m-auth-form__button m-auth-registration__button']"));
    var firstName       = element(by.css('[name="firstname"]'));
    var lastName        = element(by.css('[name="lastname"]'));
    var day             = element(by.id('days'));
    var months          = element(by.id('months'));
    var years           = element(by.id('years'));
    var address         = element (by.css('[name="address"]'));
    var postalCode      = element(by.css('[name="postalCode"]'));
    var city            = element(by.css('[name="city"]'));
    var country         = element(by.xpath("//*[@id='countrySelector']"));
    var countryChoice   = element(by.xpath(".//*[contains(text(),'Andorra')]"));
    var phoneNumber     = element(by.css('[name="phoneNumber"]'));
    var auth            = element (by.xpath(".//button[@class='e-btn m-auth-form__button m-auth-registration__button m-auth-registration__button--step2']"));


    this.openRegisterUrl = function () {
        browser.driver.get(baseLoginUrl);
        browser.driver.get(registerUrl);
        browser.waitForAngular();
    };

    this.setEmail = function (contact) {
        browser.executeScript("arguments[0].scrollIntoView();", fillEmail.getWebElement());
        fillEmail.sendKeys(contact);
    };

    this.setUsername = function (user) {
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass);
    };

    this.setPasswordRepeat = function (passRepeate) {
        passwordRepeat.sendKeys(passRepeate);
    };

    this.markCheckBox = function () {
        checkbox.click();
    };

    this.nextPage = function () {
        next.click();
    };

    this.setFirstname = function (personName) {
        browser.executeScript("arguments[0].scrollIntoView();", firstName.getWebElement());
        firstName.sendKeys(personName);
    };

    this.setLastname = function (personLastName) {
        lastName.sendKeys(personLastName);
    };

    this.setDay = function (birthDay) {
        day.sendKeys(birthDay);
    };

    this.setMonths = function (birthMonth) {
        months.sendKeys(birthMonth);
    };

    this.setYears = function (birthYear) {
        years.sendKeys(birthYear);
    };

    this.setAddress = function (livingAddress) {
        address.sendKeys(livingAddress);
    };

    this.setPostalCode = function (livingPostalCode) {
        postalCode.sendKeys(livingPostalCode);
    };

    this.setCity = function (livingCity) {
        city.sendKeys(livingCity);
    };

    this.setCountry = function () {
        country.click();
        browser.sleep(2000);
        countryChoice.click()
    };

    this.setPhonenumber = function (telefone) {
        phoneNumber.sendKeys(telefone);
    };

    this.markAuth = function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(auth), 1000);
    };

};

module.exports = RegisterPageObject;