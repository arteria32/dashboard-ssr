import { Block, DashboardStructure } from '@/_types/features/dashboard';
import { db } from '.';
import { Dashboard } from '../_models/Dashboard';

const DashboardModel = db.DashboardModel;

export const DashboardRepository = {
  getAll,
  create,
  getByKey,
  getAllDashboardBlocksByKey,
  getBlockByDashboardKeyAndBlockId,
  replaceByKey,
  deleteDashboardByKey,
  updateByKey,
};

async function getAll() {
  return await DashboardModel.find();
}

async function create(dashboardDTO: DashboardStructure) {
  const dashboard = new DashboardModel(dashboardDTO);
  return await dashboard.save();
}
async function replaceByKey(key: string, body: DashboardStructure) {
  const dashboard = await DashboardModel.findOneAndReplace(
    { key },
    { ...body, key },
    {
      new: true,
    },
  );
  return dashboard;
}

async function updateByKey(key: string, body: Partial<DashboardStructure>) {
  const dashboard = await DashboardModel.findOneAndUpdate(
    { key },
    { ...body, key },
    {
      new: true,
    },
  );
  return dashboard;
}

async function getByKey(key: string): Promise<Dashboard | null> {
  return await DashboardModel.findOne({ key });
}
async function getAllDashboardBlocksByKey(key: string): Promise<Block[]> {
  const result: Block[] = [];
  const document: Dashboard | null = await DashboardModel.findOne({ key });
  if (!document) {
    throw new Error('Dashboard config not found');
  }
  let blockStack = document.content;
  let curBlock;
  while (blockStack.length) {
    curBlock = blockStack.pop();
    if (!curBlock) continue;
    blockStack = [...blockStack, ...(curBlock?.body || [])];
    result.push(curBlock);
  }
  return result;
}

async function getBlockByDashboardKeyAndBlockId(
  pageKey: string,
  blockId: string,
): Promise<Block | null> {
  const blocks = await getAllDashboardBlocksByKey(pageKey);
  return blocks.find(({ id }) => id === blockId) ?? null;
}

async function deleteDashboardByKey(
  key: string,
  isForce?: boolean,
): Promise<void> {
  if (isForce) {
    await DashboardModel.deleteMany({ key });
  } else {
    await DashboardModel.deleteOne({ key });
  }
}
