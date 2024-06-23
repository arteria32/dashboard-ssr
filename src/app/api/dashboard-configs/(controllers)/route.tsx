import dbConnect, { dashboardsRepo } from '../_repo/dashboards-repo';

export async function GET(request: Request) {
  console.log('request', request);
  const dashboards = await dashboardsRepo.getAll();
  return Response.json(dashboards);
}
