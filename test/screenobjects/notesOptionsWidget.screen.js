const BasePage = require('./base.page');

class NotesOptionsWidget extends BasePage {
    get deleteOption() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]');
    }

    async clickDelete() {
        await this.deleteOption.click();
    }
}

module.exports = NotesOptionsWidget;