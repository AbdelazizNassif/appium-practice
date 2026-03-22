const BasePage = require('./base.page');

class TopNavBar extends BasePage {
    get logo() {
        return $('//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/logo_image"]');
    }

    get addButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get backButton() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');
    }

    get moreButton() {
        return $('//android.widget.ImageButton[@content-desc="More"]');
    }

    get navIcon() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    async clickAddButton() {
        await this.clickElement('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    async clickBackButton() {
        await this.clickElement('//*[contains(@resource-id, "back_btn")]');
    }

    async clickMoreButton() {
        // await this.clickElement('//android.widget.ImageButton[@content-desc="More"]');
        await this.clickElement('//*[contains(@resource-id, "menu_btn")]');
    }

    async clickNavIcon() {
        await this.clickElement('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    async isLogoDisplayed() {
        return await this.locateElement('//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/logo_image"]').isDisplayed();
    }
}

module.exports = TopNavBar;