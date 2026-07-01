const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const h1Data = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    if (!h1) return 'No h1';
    const style = window.getComputedStyle(h1);
    return {
      text: h1.innerText,
      color: style.color,
      visibility: style.visibility,
      opacity: style.opacity,
      fontFamily: style.fontFamily,
      display: style.display
    };
  });
  console.log('H1:', h1Data);
  
  const h3Data = await page.evaluate(() => {
    const h3 = Array.from(document.querySelectorAll('h3')).find(el => el.innerText.includes('Concept Mastery') || el.innerText.includes('CONCEPT MASTERY'));
    if (!h3) return 'No h3';
    const style = window.getComputedStyle(h3);
    return {
      text: h3.innerText,
      color: style.color,
      fontFamily: style.fontFamily
    };
  });
  console.log('H3 Concept Mastery:', h3Data);

  await browser.close();
})();
