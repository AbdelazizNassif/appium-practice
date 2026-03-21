const BasePage = require('./base.page');

class AlertDialog extends BasePage {
    get message() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get okButton() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async getMessageText() {
        return await this.message.getText();
    }

    async confirm() {
        await this.okButton.click();
    }
}

module.exports = AlertDialog;