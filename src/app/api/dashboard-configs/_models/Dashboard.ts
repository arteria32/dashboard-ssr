/* eslint-disable no-param-reassign */
import { Block, DashboardStructure } from '@/_types/features/dashboard';
import { randomUUID } from 'crypto';
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

const BlockSchema = new mongoose.Schema<Block>({});

const DashboardSchema = new mongoose.Schema<Dashboard>(
  {
    _id: {
      type: mongoose.Schema.Types.UUID,
      default: () => randomUUID(),
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    modifiedAt: {
      type: Date,
      default: () => Date.now(),
    },
    state: {
      type: String,
      enum: DashboardState,
      default: DashboardState.Idle,
    },
    key: {
      type: String,
    },
    content: {
      type: [BlockSchema],
      default: [],
    },
  },
  {
    statics: {
      findById(id: string) {
        return this.findById(id);
      },
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
  },
);

export default mongoose.models.DashboardsRepo ||
  mongoose.model<Dashboard>('DashboardsRepo', DashboardSchema);
