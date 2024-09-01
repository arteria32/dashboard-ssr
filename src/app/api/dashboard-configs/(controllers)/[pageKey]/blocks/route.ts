import { DashboardRepository } from '@/app/api/dashboard-configs/_repo/DashboardRepository';

type GetBlocksByKeyParams = {
  pageKey: string;
};

export async function GET(
  request: Request,
  { params }: { params: GetBlocksByKeyParams },
) {
  const { pageKey } = params;
  const result = await DashboardRepository.getAllDashboardBlocksByKey(pageKey);
  return Response.json(result);
}
