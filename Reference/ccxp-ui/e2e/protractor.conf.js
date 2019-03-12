// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'CCXP_e2e_report.html',
  pathBuilder: function(currentSpec, suites, browserCapabilities) {
    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
  }
});
exports.config = {
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  defaultTimeoutInterval: 30000,
  getPageTimeout: 60000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200',
  useAllAngular2AppRoots: true,
  rootElement: 'body',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    isVerbose:true,
    print: function() {}
  },
  // browserNoActivityTimeout:400000,
  onPrepare() {
    browser.driver.manage().window().maximize();
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(reporter);
  }
};
