const BasePage = require('./base.page');

class NoteTypeModal extends BasePage {
    get textOption() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Text"]');
    }

    async selectTextNote() {
        await this.clickElement('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Text"]');
    }
}

module.exports = NoteTypeModal;