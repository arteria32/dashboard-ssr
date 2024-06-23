import { DashboardStructure } from '@/_types/features/dashboard';
import { db } from '.';

const DashboardsRepo = db.DashboardsRepo;

export const dashboardsRepo = {
  getAll,
  create,
};

async function getAll() {
  return await DashboardsRepo.find();
}

async function create(dashnoardDTO: DashboardStructure) {
  const dashboard = new DashboardsRepo(dashnoardDTO);

  // save user
  return await dashboard.save();
}
