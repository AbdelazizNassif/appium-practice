const config = require('./wdio.shared.conf');

config.port = 4723;

config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '13',
        'appium:deviceName': 'iPhone 13',
        'appium:automationName': 'XCUITest',
        'appium:app': process.cwd() + '/apps/notes-app.app',
        'appium:autoGrantPermissions': true
    }
];

config.specs = [
    './test/specs/notesApp/**.spec.js'
];

exports.config = config;