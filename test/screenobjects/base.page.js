// Base page class with common methods for all pages
class BasePage {
    /**
     * Wait for element to be visible and return it
     * @param {string} selector - Element selector
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     * @returns {WebdriverIO.Element} - The located element
     */
    async locateElement(selector, timeout = 30000) {
        const element = $(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    /**
     * Wait for element to be visible and click it
     * @param {string} selector - Element selector
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     */
    async clickElement(selector, timeout = 30000) {
        const element = await this.locateElement(selector, timeout);
        await element.click();
    }

    /**
     * Wait for element to be visible and type text into it
     * @param {string} selector - Element selector
     * @param {string} text - Text to type
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     */
    async type(selector, text, timeout = 30000) {
        const element = await this.locateElement(selector, timeout);
        await element.setValue(text);
    }

    /**
     * Get element text after waiting for visibility
     * @param {string} selector - Element selector
     * @param {number} timeout - Timeout in milliseconds (default: 10000)
     * @returns {string} - Element text
     */
    async getElementText(selector, timeout = 30000) {
        const element = await this.locateElement(selector, timeout);
        return await element.getText();
    }

    /**
     * Scroll until the element is visible on the screen.
     * Uses swipe gestures and tries up to maxScrolls times.
     * @param {string} selector - Element selector to locate
     * @param {number} maxScrolls - Maximum scroll attempts (default: 10)
     * @param {number} scrollDuration - Duration of swipe in ms (default: 800)
     * @returns {WebdriverIO.Element} - The visible element
     */

}

module.exports = BasePage;