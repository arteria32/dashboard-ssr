import { DashboardRepository } from '@/app/api/dashboard-configs/_repo/DashboardRepository';

type GetBlocksByKeyParams = {
  pageKey: string;
  blockId: string;
};

export async function GET(
  request: Request,
  { params }: { params: GetBlocksByKeyParams },
) {
  const { pageKey, blockId } = params;
  const result = DashboardRepository.getBlockByDashboardKeyAndBlockId(
    pageKey,
    blockId,
  );
  return Response.json(result);
}

export async function PUT(
  request: Request,
  { params }: { params: GetBlocksByKeyParams },
) {
  const { pageKey, blockId } = params;
  const result = DashboardRepository.getBlockByDashboardKeyAndBlockId(
    pageKey,
    blockId,
  );
  return Response.json(result);
}
