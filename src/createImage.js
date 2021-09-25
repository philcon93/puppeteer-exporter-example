const puppeteer = require('puppeteer');

const createImage = async (pageUrl, size) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: size.width, height: size.height });
    await page.goto(pageUrl, { waitUntil: 'networkidle0' });

    const imageBuffer = await page.screenshot();

    await browser.close();

    return imageBuffer;
};

module.exports = { createImage };