import { dashboardsRepo } from '../../_repo/dashboards-repo';

type GetPageByKeyParams = {
  pageKey: string;
};
export async function GET(
  request: Request,
  { params }: { params: GetPageByKeyParams },
) {
  const { pageKey } = params;
  const result = await dashboardsRepo.getByKey(pageKey);
  return Response.json(result);
}
