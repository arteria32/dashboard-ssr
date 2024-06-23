import { db } from '.';

const Dashboards = db.Dashboards;

export const dashboardsRepo = {
  getAll,
};

async function getAll() {
  return await Dashboards.find();
}
