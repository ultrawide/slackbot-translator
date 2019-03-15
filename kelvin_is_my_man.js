'use strict';

const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({
   headless: false,
 });
 const page = await browser.newPage();

 await page.goto(
   'https://nwhacks2019.slack.com/messages/CF8GK0404/convo/CF8GK0404-1548543235.089500/'
 );

 await page.waitFor(30000);

 for (let i = 0; i < 256; i++) {
   for (let j = 0; j < 256; j++) {
     for (let k = 0; k < 256; k++) {
       await page.click('div.p-message_input_field[data-qa="message_input"]');
       await page.type(
         'div.p-message_input_field[data-qa="message_input"]',
         `rgb(${i}, ${j} ,${k})`
       );
       await page.click('button.p-threads_footer__send_button');
       await page.waitFor(500);
     }
   }
 }

 await browser.close();
})();
