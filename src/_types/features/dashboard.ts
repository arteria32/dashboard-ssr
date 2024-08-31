import type * as CSS from 'csstype';

export enum BlockType {
  Container = 'container',
  Widget = 'widget',
}
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
