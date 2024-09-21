import { Block, ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import ContainerComponent from './container/container';
import PlugWidgetComponent from './plug-widget/plug-widget';
import { FC, ReactNode } from 'react';
import WidgetWrapper from './widget-wrapper/widget-wrapper';
import { IFrameWidget } from './iframe/iframe-widget.module';
import { isIFrameWidget } from './type-guards';

const WIDGET_TYPES = new Set<string>(Object.values(WidgetEnum));

export const renderBlock = (block: Block) => {
  if (WIDGET_TYPES.has(block.type)) {
    let widgetComponent: ReactNode = <>UndefiedType</>;
    if (isIFrameWidget(block)) {
      widgetComponent = <IFrameWidget {...block} />;
    } else {
      switch (block.type) {
        case WidgetEnum.BasisWidget:
        default:
          widgetComponent = <PlugWidgetComponent {...block} />;
          break;
      }
    }
    return <WidgetWrapper {...block}>{widgetComponent}</WidgetWrapper>;
  }
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return <ContainerComponent {...block} />;
  }
  return <>Error block parsing: Undeifed type</>;
};
