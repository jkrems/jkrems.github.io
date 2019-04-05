'use strict';

const puppeteer = require('puppeteer-core');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4000/resume/', {
    waitUntil: 'networkidle2'
  });
  await page.pdf({
    path: 'resume/jan-krems.pdf',
    format: 'A4',
    displayHeaderFooter: false,
  });

  await browser.close();
}
main();
