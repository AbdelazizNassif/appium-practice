const BasePage = require('./base.page');

class MainSideMenu extends BasePage {
    get trashCanOption() {
        return $('//*[@text="Trash Can"]');
    }

    async clickTrashCan() {
        await this.clickElement('//*[@text="Trash Can"]');
    }
}

module.exports = MainSideMenu;