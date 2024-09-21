import {
  Block,
  IFrameWidgetBlock,
  WidgetEnum,
} from '@/_types/features/dashboard';

export const isIFrameWidget = (block: Block): block is IFrameWidgetBlock =>
  block.type === WidgetEnum.IFrame;
