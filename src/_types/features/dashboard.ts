import type * as CSS from 'csstype';

export enum ContainerEnum {
  BasicContainer = 'container',
}
export enum WidgetEnum {
  BasisWidget = 'widget',
  IFrame = 'iframe',
}

export type BlockType = ContainerEnum | WidgetEnum;

export type BasicBlock = {
  id: string;
  key: string; //uniq key
  name?: string;
  style?: CSS.Properties;
  type: BlockType;
  body?: Block[];
  description?: string;
};

export type IFrameWidgetBlock = BasicBlock & { source: string };
export type Block = BasicBlock | IFrameWidgetBlock;

export type DashboardStructure = {
  id: string;
  key: string;
  style?: CSS.Properties;
  content: Block[];
};
