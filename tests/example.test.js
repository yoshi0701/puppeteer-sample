const puppeteer = require('puppeteer')

describe('First test', () => {
  it('should launch the browser', async function() {
    // const browser = await puppeteer.launch({ headless: false})
    // slow mode
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
    // dev tool open
    const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })
    const page = await browser.newPage()

    await page.goto('http://example.com/')
    // wait for 3 sec before next step
    await page.waitFor(3000)

    // check h1 tag is opn the page
    await page.waitForSelector('h1')
    await browser.close()
  })
})