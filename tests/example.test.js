const puppeteer = require('puppeteer')

describe('First test', () => {
  it('should launch the browser', async function() {
    // const browser = await puppeteer.launch({ headless: false})
    // slow mode
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
    // dev tool open
    const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })
    const page = await browser.newPage()

    await page.goto('https://devexperss.github.io/testcafe/example/')
    await page.type('developer-name', 'Mike', { delay: 0 })
    await page.waitFor(2000)
    // checkbox
    await page.click('#tried-test-cafe', { clickCount: 1 })
    // dropdown
    await page.select('#preferred-interface', 'JaveScript API')
    await page.waitFor(5000)

    await browser.close()
  })
})