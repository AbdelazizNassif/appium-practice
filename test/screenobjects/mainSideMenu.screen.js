const BasePage = require('./base.page');

class MainSideMenu extends BasePage {
    get trashCanOption() {
        // return $("//*[contains(@text, 'Trash Can')]");
        return ('android=new UiSelector().textContains("Trash Can")');
    }

    async clickTrashCan() {
        await $('android=new UiSelector().textContains("Trash Can")').click();
        // await this.trashCanOption.waitForDisplayed({ reverse: true ,timeout: 5000 });
    }
}

module.exports = MainSideMenu;