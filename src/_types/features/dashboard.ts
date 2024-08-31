import type * as CSS from 'csstype';

export enum ContainerEnum {
  BasicContainer = 'container',
}
export enum WidgetEnum {
  BasisWidget = 'widget',
}
export type BlockType = ContainerEnum | WidgetEnum;

export type Block = {
  key: string; //uniq key
  name?: string;
  style?: CSS.Properties;
  type: BlockType;
  body?: Block[];
  description?: string;
};

export type DashboardStructure = {
  key: string;
  style?: CSS.Properties;
  content: Block[];
};
