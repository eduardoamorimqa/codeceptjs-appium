const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { bootstrap, teardown } = require('./server/server.js'); // Import direto das funções

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

exports.config = {
  name: 'teste-mobile-mc-5',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/Users/eduar/Documents/projetos/teste-mobile-mc-5/qazandofood.apk',
      platform: 'Android',
      device: 'emulator-5554',
      platformVersion: '12',
      appPackage: 'com.qazandoqafood',
      appActivity: 'MainActivity',
      automationName: 'UiAutomator2',
      server: 'http://127.0.0.1:4723/wd/hub',
      desiredCapabilities: {
        newCommandTimeout: 0
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap,
  teardown,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
      enable: true
    },
    htmlReporter: {
      enabled: true
    },
    retryFailedStep: {
      enable: true
    }    
  },  
};