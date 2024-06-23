import getConfig from 'next/config';
import mongoose from 'mongoose';
import DashboardSchema from '../_models/Dashboard';

const { serverRuntimeConfig } = getConfig();

mongoose.connect(
  process.env.MONGODB_URI || serverRuntimeConfig.connectionString,
);
mongoose.Promise = global.Promise;

export const db = {
  Dashboards: DashboardSchema,
};
