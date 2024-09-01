import { DashboardRepository } from '../../_repo/DashboardRepository';

type GetPageByKeyParams = {
  pageKey: string;
};
export async function GET(
  request: Request,
  { params }: { params: GetPageByKeyParams },
) {
  const { pageKey } = params;
  const result = await DashboardRepository.getByKey(pageKey);
  return Response.json(result);
}
