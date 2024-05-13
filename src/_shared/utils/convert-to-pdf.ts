import puppeteer from 'puppeteer';
import { HEADER_ID } from '../consts/page-tags';

export async function convertHTMLToPDF(
  url: string,
  pdfFilePath: string,
  hiddingTags: string[] = [HEADER_ID, 'test2'],
): Promise<Buffer> {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  await page.goto(url);

  page.addStyleTag({ content: `#${hiddingTags.join(',#')}{display:none}` });

  //Wait rendering all charts
  try {
    await page.waitForSelector('.echarts-instance', { timeout: 15000 });
  } catch (error) {
    console.error(error);
  }
  // Generate PDF

  const resPdf = await page.pdf({
    path: `${pdfFilePath}.pdf`,
    printBackground: true,
    width: '1920px',
    height: '1080px',
  });

  //close the browser
  await browser.close();
  return resPdf;
}
