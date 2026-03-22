exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'abdelazizsamir_f45tEd',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'fWFaTqNNMPjZ1xNPS818',
  hostname: 'hub.browserstack.com',
  services: ['browserstack'],
  strictCapabilities: false,
  capabilities : [
    {
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Google Pixel 7 Pro',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://e18595939066ebcd9e037de0983b31c86a10e1f0',
        'appium:autoGrantPermissions': true,
        'bstack:options': {
          buildName: 'Appium Android Test',
          projectName: 'Notes App',
          sessionName: 'Android Test Session'
        }
    }
  ],
  maxInstances: 10,
  specs: [
    '../test/specs/notesApp/notesCrudE2e.spec.js'
  ],
  exclude: [],
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};


