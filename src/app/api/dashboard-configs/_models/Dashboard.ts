/* eslint-disable no-param-reassign */
import {
  Block,
  ContainerEnum,
  DashboardStructure,
  WidgetEnum,
} from '@/_types/features/dashboard';
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

const BlockSchema = new mongoose.Schema<Block>(
  {
    type: {
      type: String,
      enum: [...Object.values(WidgetEnum), ...Object.values(ContainerEnum)],
      default: WidgetEnum.BasisWidget,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    source: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
  },
);
//implement a nesting structure (https://github.com/Automattic/mongoose/issues/13717?ysclid=m0i5y0oiwn212956391)
BlockSchema.add({
  body: {
    type: [BlockSchema],
    default: undefined,
  },
});

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
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
  },
);

export const DashboardModel =
  mongoose.models.DashboardModel ||
  mongoose.model<Dashboard>('DashboardModel', DashboardSchema);

export const BlockModel =
  mongoose.models.BlockModel ||
  mongoose.model<Block>('BlockModel', BlockSchema);
