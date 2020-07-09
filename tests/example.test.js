const puppeteer = require('puppeteer')
const expect = require('chai').expect

const { click, getText, getCount, shouldNotExit } = require('../lib/helpers')

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
    // const text = await page.$eval('h1', element => element.textContent)
    const text = await getText(page, 'h1')
    const count = await getCount(page, 'p')

    expect(title).to.be.a('string', 'Example Domain')


    await page.goto('http://zero.webappssecurity.com/index.html')
    await click(page, '#single_button')
    // await page.waitFOr(() => !document.querySelector(`$singin_button`))
    // await page.waitForSelector('#singin_button', {
    //   hidden: true,
    //   timeout: 3000
    // })
    await page.waitFor(2000)
    await shouldNotExit(page, '#singin_button')
    // await browser.close()
  })
})