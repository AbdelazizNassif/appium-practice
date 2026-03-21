const BasePage = require('./base.page');

class MainSideMenu extends BasePage {
    get trashCanOption() {
        return $('//*[@text="Trash Can"]');
    }

    async clickTrashCan() {
        await this.trashCanOption.click();
    }
}

module.exports = MainSideMenu;