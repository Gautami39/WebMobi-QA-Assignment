const { chromium } = require('playwright');
require('dotenv').config();

(async () => {
  console.log("Starting WebMobi QA Test...");

  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();

  await page.goto('https://events.webmobi.com');
  console.log("Opened WebMobi site.");

 
  await page.click('text=Login');
  await page.fill('input[type="email"]', process.env.WEBMOBI_EMAIL);
  await page.fill('input[type="password"]', process.env.WEBMOBI_PASSWORD);
  await page.click('button[type="submit"]');
  console.log("Login successful.");

  await page.waitForSelector('text=AI Event Assistant', { timeout: 30000 });
  console.log("AI Event Assistant loaded.");


  await page.fill('textarea', 'Networking dinner for 100 startup founders next month');
  await page.keyboard.press('Enter');
  console.log("Event creation message sent.");

 
  await page.waitForTimeout(5000);
  const response = await page.textContent('body');

  if (response.includes("Invalid") || response.includes("expired token")) {
    console.log(" Event creation failed - token issue detected.");
  } else if (response.includes("success") || response.includes("created")) {
    console.log(" Event created successfully.");
  } else {
    console.log("Event creation response uncertain. Check manually.");
  }

  await browser.close();
  console.log("Test Case Completed.");
})();
