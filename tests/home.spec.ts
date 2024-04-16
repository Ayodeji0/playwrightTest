import {test, expect} from '@playwright/test';

test('Open Page and Confirm Test', async({page})=>{
 await page.goto('https://dev-ehrpm.automedsys.net/');
  await expect(page).toHaveTitle('Practice Manager - Automedsys')
})