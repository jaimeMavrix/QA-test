var KabooPageObject = require ('./kabooPageObject.js');
//var until = require ('selenium-webdriver').until;

describe('kaboohomepage', function() {
	it ('should log in', function() {

	    var baseUrl = ('https://kaboo:flappybird@qatest.staging.kaboo.com/en/login');
        var url = ("https://qatest.staging.kaboo.com/en/login");

        browser.driver.get(baseUrl);
        browser.driver.get(url);
        browser.sleep(5000);
    });

	it ('type username', function() {
        var kabooPageObject = new KabooPageObject();
        kabooPageObject.setUsername('user')
	    browser.sleep(5000);
    });

    it ('type password', function() {
        var kabooPageObject = new KabooPageObject();
        //element(password).click();
        kabooPageObject.setPassword('pass')
        browser.sleep(5000);
    });

} );
