var LoginPageObject = require ('./loginPageObject.js');

describe('Login successful, directed to profile page', function() {

    beforeEach(function () {
        loginPageObject = new LoginPageObject();
    });

    it ('should log in', function() {
        loginPageObject.openLoginUrl();
    });

    it ('type username', function() {
        loginPageObject.setUsername('bibofifa');
    });

    it ('type password', function() {
        loginPageObject.setPassword('Flappybird1');
    });

    it ('click login', function() {
        loginPageObject.login();
    });

    it ('welcome message', function() {
        loginPageObject.successMessage();
    });

    it('should be redirected to profile page', function() {
        // This step is failing because after sing in we are in lobby page not profile page
        browser.sleep(3000);
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toMatch('/profile');
    });
} );
