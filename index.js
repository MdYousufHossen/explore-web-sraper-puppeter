const pupperteer=require('puppeteer');
const debug= require('debug')('scraper');

(async()=>{
const browser=await pupperteer.launch({headless:false});
const page=await browser.newPage();
// await page.waitFor(1000)

await debug('go to the page')
await page.goto('https://bikroy.com/en?login-modal=true&redirect-url=/en');

await debug('click email button')
await page.click(".gtm-email-login")

await debug('type email')
await page.type("#input_email","xobeca6632@sopulit.com")

await debug('type password')
await page.type("#input_password","123456789")

await debug('click login button')
await page.click(".gtm-login")

await debug('is  my account btn visible?')
await page.waitForSelector('.gtm-myaccount-click',{visible:true})

await debug('take a screenshot')
await page.screenshot({path:'screenshots/bikroy.png'})
// await browser.close();
})();
// gmail: xobeca6632@sopulit.com

// got this page
// input email: #input_email ---  xobeca6632@sopulit.com
// input pass: #input_password === 123456789
// click login: .gtm-login