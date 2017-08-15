exports.config = {
	//The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
 //Here we specify the name of the specs files.
 chromeOnly: true,
directConnect: true,
  specs: ['example_spec.js']
}