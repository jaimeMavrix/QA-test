var KabooPageObject = require ('./kabooPageObject.js');

describe('kaboohomepage', function() {
		
	it ('should log in', function() {

	var baseUrl = ('https://kaboo:flappybird@qatest.staging.kaboo.com/en/login');
        var url = ("https://qatest.staging.kaboo.com/en/login");

        browser.driver.get(baseUrl);
       	browser.driver.get(url);
       	browser.sleep(5000);
		});
		
	beforeEach(function () {
	kabooPageObject = new KabooPageObject();
	});
	

	it ('type username', function() {
        kabooPageObject.setUsername('user')
	    browser.sleep(5000);
		});

  	it ('type password', function() {
        kabooPageObject.setPassword('pass')
        browser.sleep(5000);
		});
		
	it ('type password', function() {
        kabooPageObject.login()
        browser.sleep(5000);
		});

} );
