const BasePage = require('./base.page');

class TrashCanListingScreen extends BasePage {
    async isNoteInTrash(text) {
        const note = await this.locateElement(`//*[@text="${text}"]`);
        return await note.isDisplayed();
    }
}

module.exports = TrashCanListingScreen;