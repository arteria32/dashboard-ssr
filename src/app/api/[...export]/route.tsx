import { convertHTMLToPDF } from '@/_shared/utils/convert-to-pdf';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const filteredUrl = url.href.replace('/api/export', '');
  console.log('getExport', url);
  const data = await convertHTMLToPDF(filteredUrl, 'test');
  return new Response(data, {
    headers: {
      'content-type': ':application/pdf',
    },
  });
}
