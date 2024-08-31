import { DashboardStructure } from '@/_types/features/dashboard';
import { db } from '.';
import { Dashboard } from '../_models/Dashboard';

const DashboardsRepo = db.DashboardsRepo;

export const dashboardsRepo = {
  getAll,
  create,
  getByKey,
};

async function getAll() {
  return await DashboardsRepo.find();
}

async function create(dashnoardDTO: DashboardStructure) {
  const dashboard = new DashboardsRepo(dashnoardDTO);

  // save user
  return await dashboard.save();
}

async function getByKey(key: string): Promise<Dashboard> {
  return await DashboardsRepo.where<Dashboard>(key)
    .sort({ modfiedAt: 'desc' })
    .limit(1)
    .exec()
    .then(([res]) => res);
}
