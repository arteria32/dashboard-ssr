import { DashboardStructure } from '@/_types/features/dashboard';
import mongoose from 'mongoose';

export enum DashboardState {
  Idle = 'idle',
  Changing = 'changing',
  Working = 'working',
  Rejected = 'rejected',
}
export interface Dashboard extends DashboardStructure, mongoose.Document {
  createdAt: Date;
  modifiedAt?: Date;
  createdBy?: string;
  modifedBy?: string;
  realtedTo?: string;
  isDefault?: boolean;
  state: DashboardState;
}

const DashboardSchema = new mongoose.Schema<Dashboard>(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    state: {
      type: String,
      enum: DashboardState,
      default: DashboardState.Idle,
    },
  },
  {
    statics: {
      findById(id: string) {
        return this.findById(id);
      },
    },
  },
);

export default mongoose.models.Dashboard ||
  mongoose.model<Dashboard>('Dashboard', DashboardSchema);
