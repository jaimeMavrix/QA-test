var RegisterPageObject = require ('./registerPageObject.js');

describe('Register new user', function() {

    beforeEach(function () {
        registerPageObject = new RegisterPageObject();
    });

    it ('should log in', function() {
        registerPageObject.openRegisterUrl();
    });

    it ('type email', function() {
        registerPageObject.setEmail('test@test.ee');
    });

    it ('type username', function() {
        registerPageObject.setUsername('test');
    });

    it ('type password', function() {
        registerPageObject.setPassword('Flappybird1');
    });

    it ('type password', function() {
        registerPageObject.setPasswordRepeat('Flappybird1');
    });

    it ('checkbox', function() {
        registerPageObject.markCheckBox();
        browser.sleep(3000)
    });

    it ('nextPage', function() {
        registerPageObject.nextPage();
    });

    it('should still be in signup page', function() {
        browser.sleep(3000);
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toMatch('/signup');
    });

    it ('type username', function() {
        registerPageObject.setFirstname('testimiseks')
    });

    it ('type username', function() {
        registerPageObject.setLastname('testimiseks')
    });

    it ('type day', function() {
        registerPageObject.setDay('14');
    });

    it ('type month', function() {
        registerPageObject.setMonths('10');
    });

    it ('type year', function() {
        registerPageObject.setYears('1988');
    });

    it ('type aadress', function() {
        registerPageObject.setAddress('kalevi');
    });

    it ('type postcode', function() {
        registerPageObject.setPostalCode('123456');
    });

    it ('type city', function() {
        registerPageObject.setCity('tallinn');
    });

    it ('choose country', function() {
        registerPageObject.setCountry();
    });

    it ('phonenumber', function() {
        registerPageObject.setPhonenumber('1234566');
    });

    it ('is button activated', function() {
        registerPageObject.markAuth();
        browser.sleep(3000);
    });
} );
