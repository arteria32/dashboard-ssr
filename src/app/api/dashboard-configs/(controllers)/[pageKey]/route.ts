import { DashboardRepository } from '../../_repo/DashboardRepository';

type PageByKeyParams = {
  pageKey: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<PageByKeyParams> },
) {
  const { pageKey } = await params;
  const result = await DashboardRepository.getByKey(pageKey);
  return Response.json(result);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<PageByKeyParams> },
) {
  const { pageKey } = await params;
  await DashboardRepository.deleteDashboardByKey(pageKey, true);
  return Response.json(
    'All dashboards with this key were deleted successfully.',
  );
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<PageByKeyParams> },
) {
  const { pageKey } = await params;
  const body = await request.json();
  if (!body) return new Response('empty body', { status: 400 });
  const result = await DashboardRepository.replaceByKey(pageKey, body);
  return Response.json(result);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<PageByKeyParams> },
) {
  const { pageKey } = await params;
  const body = await request.json();
  if (!body) return new Response('empty body', { status: 400 });
  const result = await DashboardRepository.updateByKey(pageKey, body);
  return Response.json(result);
}
