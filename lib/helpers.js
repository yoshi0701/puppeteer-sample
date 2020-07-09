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
  getCount: async function(page, selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$$eval(selector, element => element.length)
    } catch (error) {
      throw new Error(`Cannot get count of selector: ${selector}`)
    }
  },
  typeTxt: async function(page, selector) {
    try {
      await page.waitForSelector(selector)
      await page.tyep(selector, text)
    } catch (error) {
      throw new Error(`Could not type into selector: ${selector}`)
    }
  },
  waitForText: async function(page, selector, text) {
    try {
      await page.waitForSelector(selector)
      await page.waitForFunction((selector, text) => {
        document.querySelector(selector).innerText.includes(text),
          {},
          selector,
          text
      })
    } catch (error) {
      throw new Error(`Text: ${text} not found dor selector: ${selector}`)
    }
  },
  shouldNotExit: async function(page, selector) {
    try {
      // await page.waitFor(() => !document.querySelector(selector))
      // work well compared to above
      await page.waitForSelector(selector, { hidden: true })
    } catch (error) {
      throw new Error(`Selector: ${selector} is visible, but should not be.`)
    }
  }
}