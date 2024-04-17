import {test, expect,Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test.setTimeout(90000); // set timeout
// open browser and perform login test

//  to use context we can have browser.newContext set the type to browsercontext and generate multiple pages from it.
// example const  browserContext1:BrowserContext = await browser.newContext()
// close context first then close parent browser

test('login test',async()=>{
    // browser one
    const browser:Browser = await chromium.launch({ headless: false, channel:'chrome' })
    const page:Page = await browser.newPage()
    await page.goto('https://qa-ehrpm.automedsys.net/')
   const username: Locator =  await page.locator('#Username');
   const password: Locator = await page.locator('#Password');
   const practiceId:Locator = await page.locator('#PracticeRefNumber')
   // DIFFERENT  WAYS TO USE LOCATORS IN PLAYWRIGHT
//    const loginBtn:any = await page.waitForSelector("//span[normalize-space()='Log in']");
//    const loginBtn = await page.locator('xpath = //span[normalize-space()="Log in"] ')
   const loginBtn = await page.locator('css = button[type="submit"]')
    await username.fill('')
    await password.fill('')
    await practiceId.fill('')
    await loginBtn.click()
    const title:string = await page.title()
    expect(title).toEqual('Practice Manager - Automedsys')
    console.log('This is the title of this page', title)
    await page.screenshot({path: 'homepage.png'})
    await browser.close()
})