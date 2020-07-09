module.exports = {
  click: async function(page, selector) {
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    } catch (error) {
      throw new Error(`Could not clickon slector: ${selector}`)
    }
  },
  getText: async function(page, selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$eval(selector, element => element.innerHTML)
    } catch (error) {
      throw new Error(`Cannot get textform selector: ${selector}`)
    }
  },
  getCount; async function(page, selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$$eval(selctor, element => element.length)
    } catch (error) {
      throw new Error(`Cannot get count of selector: ${selector}`)
    }
  }
}