import { DashboardStructure } from '@/_types/features/dashboard';
import { db } from '.';
import { Dashboard } from '../_models/Dashboard';

const DashboardModel = db.DashboardModel;

export const DashboardRepository = {
  getAll,
  create,
  getByKey,
};

async function getAll() {
  return await DashboardModel.find();
}

async function create(dashnoardDTO: DashboardStructure) {
  const dashboard = new DashboardModel(dashnoardDTO);
  console.log('BLOCKMODEL', dashboard);
  return await dashboard.save();
}

async function getByKey(key: string): Promise<Dashboard | null> {
  return await DashboardModel.findOne({ key });
}
