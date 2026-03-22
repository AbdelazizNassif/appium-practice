const BasePage = require('./base.page');

class SplashScreen extends BasePage {
    get skipButton() {
        return $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    async skipTutorial() {
        await this.clickElement('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
}

module.exports = SplashScreen;