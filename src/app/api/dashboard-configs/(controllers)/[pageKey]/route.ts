import { DashboardRepository } from '../../_repo/DashboardRepository';

type PageByKeyParams = {
  pageKey: string;
};
export async function GET(
  request: Request,
  { params }: { params: PageByKeyParams },
) {
  console.log('GETPageByKeyParams', params);
  const { pageKey } = params;
  const result = await DashboardRepository.getByKey(pageKey);
  return Response.json(result);
}

export async function DELETE(
  request: Request,
  { params }: { params: PageByKeyParams },
) {
  const { pageKey } = params;
  await DashboardRepository.deleteDashboardByKey(pageKey, true);
  return Response.json(
    'All dashboards with this key were deleted successfully.',
  );
}
