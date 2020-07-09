const puppeteer = require('puppeteer')

describe('Login Test', () => {
  let browser
  let page

  before(async function() {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      devtools: false
    })
    page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
  })

  after(async function() {
    await browser.close()
  })

  it('Login Test - Invalid Credentials', async function() {
    // TODO
  })

  it("Login Test - Valid Credentials", async function() {
    // TODO
  })

})
