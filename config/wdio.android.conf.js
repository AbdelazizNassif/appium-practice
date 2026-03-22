const config = require('./wdio.shared.conf');

config.port = 4723;
// access key fWFaTqNNMPjZ1xNPS818
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '13',
        'appium:deviceName': 'Pixel XL',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.cwd() + '/app/ColorNote.apk',
        'appium:autoGrantPermissions': true
    }
];
    // services for the test runner
    config.services = ['appium'];
config.specs = [
    '../test/specs/notesApp/notesCrudE2e.spec.js'
];

exports.config = config;
