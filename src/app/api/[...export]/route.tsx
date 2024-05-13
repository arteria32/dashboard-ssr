import { convertHTMLToPDF } from '@/_shared/utils/convert-to-pdf';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const filteredUrl = url.href.replace('/api/export', '');
  const data = await convertHTMLToPDF(filteredUrl);
  return new Response(data, {
    headers: {
      'content-type': ':application/pdf',
      'content-disposition': `inline; filename=report_${url.searchParams}.pdf`,
    },
  });
}
