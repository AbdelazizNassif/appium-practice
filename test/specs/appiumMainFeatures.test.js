/// <reference types="@wdio/globals/types" />

const { expect } = require('@wdio/globals');

// tests run under the WDIO runner provide a `browser` global

describe('Appium mobile test', () => {
    // the runner automatically creates and destroys the session
    it('should be able to open splash screen33', async () => {
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar');
        expect(await actionBar.getText()).toBe('Action Bar');
        expect(await actionBar).toBeDisplayed();
    });

    it('should be able to open splash screen33', async () => {
        const appOption = await $('android.widget.TextView');
        console.log("************************")
        console.log(appOption);
        console.log("************************")
        console.log(await appOption.getText());
        await expect(appOption).toHaveText('API Demos');
    });

    it('should be able to open splash screen44', async () => {
        await $('~App').click();
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@content-desc="List dialog"]').click();
        await $('//android.widget.TextView[@text="Command one"]').click();
        await expect($('//android.widget.TextView[@resource-id="android:id/message"]'))
            .toHaveText('You selected: 0 , Command one');
        await browser.pause(5000); // Pause to observe the app state (optional)
    });

    it('should be able to open splash screen3322', async () => {
        const appOptions = await $$('android.widget.TextView');
        for (const option of appOptions) {
            const text = await option.getText();
            console.log("Option text: " + text);
        }
    });

    it('should be able to open splash screen3322', async () => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();
        await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]')
            .setValue('canada');

        expect(await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]').getText()).toBe('canada');

        //   mCurrentFocus=Window{3e7eb1d u0 io.appium.android.apis/io.appium.android.apis.app.AlertDialogSamples}
    });

    it('should be able to open splash screen3322 vv', async () => {
        // await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.execute("mobile: startActivity",
            { component: "io.appium.android.apis/io.appium.android.apis.app.AlertDialogSamples" });
        await driver.pause(5000);
        expect(await $("//*[@text='List dialog']")).toHaveText("List dialog");
    });


    it.only('should be able to change date', async () => {
        await driver.execute("mobile: startActivity",
            { component: "io.appium.android.apis/io.appium.android.apis.view.DateWidgets1" });

        console.log('Date before is: ');
        const currentData = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()

        await $('~change the date').click();
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`).click();
        await $("//*[@text='10']").click();
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
        console.log('Date after is: ');  
        const dataAfter = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')
                .getText()
        expect(dataAfter).toHaveText('10');
        expect(dataAfter).not.toBe(currentData);
    });



});
