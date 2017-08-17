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
        kabooPageObject.failedMessage();
        browser.sleep(10000);
    });

} );

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
        kabooPageObject.setUsername('bibofifa')
        //browser.sleep(1000);
    });

    it ('type password', function() {
        kabooPageObject.setPassword('Flappybird1')
    });

    it ('click login', function() {
        kabooPageObject.login();
    });

    it ('wait message', function() {
        kabooPageObject.successMessage();
        browser.sleep(5000);
    });

} );
