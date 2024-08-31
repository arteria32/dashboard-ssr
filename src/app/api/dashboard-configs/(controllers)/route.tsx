import { DashboardRepository } from '../_repo/DashboardRepository';

export async function GET(_request: Request) {
  const dashboards = await DashboardRepository.getAll();
  return Response.json(dashboards);
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body) return new Response('empty body', { status: 500 });
  const newBoard = await DashboardRepository.create(body);

  return Response.json(newBoard, { status: 201 });
}
