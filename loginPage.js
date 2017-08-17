var KabooPageObject = require ('./kabooPageObject.js');

describe('kaboohomepage', function() {

    beforeEach(function () {
        kabooPageObject = new KabooPageObject();
    });

    it ('should log in', function() {
        kabooPageObject.openLoginUrl();
    });

    it ('type username', function() {
        kabooPageObject.setUsername('user')
    });

    it ('type password', function() {
        kabooPageObject.setPassword('pass')
    });

    it ('click login', function() {
        kabooPageObject.login();
    });

    it ('wait message', function() {
        kabooPageObject.failedMessage();
        browser.sleep(3000);
    });
} );

describe('kaboohomepage', function() {

    beforeEach(function () {
        kabooPageObject = new KabooPageObject();
    });

    it ('should log in', function() {
        kabooPageObject.openLoginUrl();
    });

    it ('type username', function() {
        kabooPageObject.setUsername('user')
    });

    it ('type password', function() {
        kabooPageObject.setPassword('pass')
    });

    it ('click login', function() {
        kabooPageObject.login();
    });

    it ('wait message', function() {
        kabooPageObject.successMessage();
        browser.sleep(3000);
    });
} );
