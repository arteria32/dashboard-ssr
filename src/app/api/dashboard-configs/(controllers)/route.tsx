import { dashboardsRepo } from '../_repo/dashboards-repo';

export async function GET(request: Request) {
  console.log('request', request);
  const dashboards = await dashboardsRepo.getAll();
  return Response.json(dashboards);
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body) return new Response('empty body', { status: 500 });
  const newBoard = await dashboardsRepo.create(body);
  return Response.json(newBoard, { status: 201 });
}
