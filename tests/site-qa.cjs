const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  fs.mkdirSync('qa-output', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const results = [];
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('file://' + path.resolve('docs/index.html'));
    const sizes = await page.evaluate(() => ({ viewport: innerWidth, scroll: document.documentElement.scrollWidth }));
    await page.screenshot({ path: `qa-output/draft-${width}.png`, fullPage: true });
    await page.screenshot({ path: `qa-output/hero-${width}.png`, fullPage: false });
    if (sizes.scroll > sizes.viewport) throw Error(`Horizontal overflow at ${width}: ${sizes.scroll}`);
    await page.getByRole('tab', { name: 'Launch planning' }).click();
    if (!((await page.locator('#demo-title').textContent()).includes('plan'))) throw Error('Tab click failed');
    await page.getByRole('tab', { name: 'Launch planning' }).press('ArrowRight');
    if (!((await page.locator('#demo-title').textContent()).includes('identity'))) throw Error('Keyboard tab failed');
    await page.getByText('How much will it cost?', { exact: true }).click();
    if ((await page.locator('details').last().getAttribute('open')) === null) throw Error('FAQ failed');
    await page.getByText('How much will it cost?', { exact: true }).click();
    if ((await page.locator('details').last().getAttribute('open')) !== null) throw Error('FAQ close failed');
    results.push({ width, overflow: false, tabs: 'passed', keyboard: 'passed', faq: 'passed' });
  }
  if (errors.length) throw Error(errors.join('\n'));
  fs.writeFileSync('qa-output/results.json', JSON.stringify({ results, pageErrors: errors, source: 'checked-out docs/index.html' }, null, 2));
  console.log(JSON.stringify(results));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
