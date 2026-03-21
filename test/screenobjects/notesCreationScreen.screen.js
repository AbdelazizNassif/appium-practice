const BasePage = require('./base.page');

class NotesCreationScreen extends BasePage {
    get noteEditField() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    async enterNoteText(text) {
        await this.noteEditField.setValue(text);
    }
}

module.exports = NotesCreationScreen;