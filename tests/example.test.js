const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('First test', () => {
  it('should launch the browser', async function() {
    // const browser = await puppeteer.launch({ headless: false})
    // slow mode
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
    // dev tool open
    const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })
    const page = await browser.newPage()
    await page.goto('http://example.com/')
    const title = await page.title()
    const url = await page.url()
    // find selector
    const text = await page.$eval('h1', element => element.textContent)

    expect(title).to.be.a('string', 'Example Domain')

    await browser.close()
  })
})