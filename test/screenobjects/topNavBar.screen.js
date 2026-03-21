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
        await this.addButton.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async clickMoreButton() {
        await this.moreButton.click();
    }

    async clickNavIcon() {
        await this.navIcon.click();
    }

    async isLogoDisplayed() {
        return await this.logo.isDisplayed();
    }
}

module.exports = TopNavBar;