const BasePage = require('./base.page');

class NotesListingScreen extends BasePage {
    get noteTitles() {
        return $$('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get noteTitle() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async getNoteTitles() {
        return await this.noteTitles;
    }

    async clickNoteByText(text) {
        const note = $(`//*[@text="${text}"]`);
        await note.click();
    }

    async isNoteDisplayed(text) {
        const note = $(`//*[@text="${text}"]`);
        return await note.isDisplayed();
    }

    async isNoteNotExisting(text) {
        const note = $(`//*[@text="${text}"]`);
        return await note.waitForDisplayed({ reverse: true, timeout: 5000 });
    }
}

module.exports = NotesListingScreen;