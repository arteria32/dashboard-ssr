import puppeteer from 'puppeteer';
import { HEADER_ID } from '../consts/page-tags';

export async function convertHTMLToPDF(
  url: string,
  pdfFilePath: string,
  hiddingTags: string[] = [HEADER_ID, 'test2'],
): Promise<Buffer> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  page.addStyleTag({ content: `#${hiddingTags.join(',#')}{display:none}` });
  // Generate PDF
  const resPdf = await page.pdf({
    path: `${pdfFilePath}.pdf`,
    format: 'A4',
    printBackground: true,
  });

  //close the browser
  await browser.close();
  return resPdf;
}
