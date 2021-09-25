const puppeteer = require('puppeteer');

const createPDF = async (pageUrl, size) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(pageUrl, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
        printBackground: true,
        width: size.width + size.unit,
        height: size.height + size.unit
    });

    await browser.close();

    return pdfBuffer;
};

module.exports = { createPDF };