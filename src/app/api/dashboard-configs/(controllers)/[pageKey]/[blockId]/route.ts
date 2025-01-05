import { DashboardRepository } from '@/app/api/dashboard-configs/_repo/DashboardRepository';

type GetBlocksByKeyParams = {
  pageKey: string;
  blockId: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<GetBlocksByKeyParams> },
) {
  const { pageKey, blockId } = await params;
  const result = await DashboardRepository.getBlockByDashboardKeyAndBlockId(
    pageKey,
    blockId,
  );

  return Response.json(result);
}
