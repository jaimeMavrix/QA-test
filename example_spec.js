var KabooPageObject = require ('../test/KabooPageObject.js');

describe('kaboohomepage', function() {
	browser.get('http://qatest.staging.kaboo.com/');
	var kaboo = new  KabooPageObject();
	
	describe('kaboohomepage', function() {
		
		it('should type user', function() {
		kaboo.loginButton.click();
  });
  });
});