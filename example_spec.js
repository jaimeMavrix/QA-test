var KabooPageObject = require ('./kabooPageObject.js');

describe('kaboohomepage', function() {

    it ('should log in', function() {

        var baseLoginUrl = ('https://kaboo:flappybird@qatest.staging.kaboo.com/en/login');
        var loginUrl = ("https://qatest.staging.kaboo.com/en/login");

        browser.driver.get(baseLoginUrl);
        browser.driver.get(loginUrl);
        browser.sleep(5000);

    });

    beforeEach(function () {
        kabooPageObject = new KabooPageObject();
    });

    it ('type username', function() {
        kabooPageObject.setUsername('user')
        //browser.sleep(1000);
    });

    it ('type password', function() {
        kabooPageObject.setPassword('pass')
    });

    it ('click login', function() {
        kabooPageObject.login();
    });

    it ('wait message', function() {
        kabooPageObject.errorMessageDisplayed();
        browser.sleep(1000);
    });

} );
