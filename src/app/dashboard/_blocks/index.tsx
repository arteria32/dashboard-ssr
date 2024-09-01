import { Block, ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import ContainerComponent from './container/container';
import PlugWidgetComponent from './plug-widget/plug-widget';
import { FC, ReactNode } from 'react';
import WidgetWrapper from './widget-wrapper/widget-wrapper';

const WIDGET_TYPES = new Set<string>(Object.values(WidgetEnum));

export const renderBlock = (block: Block) => {
  if (WIDGET_TYPES.has(block.type)) {
    let widgetComponent: ReactNode = <>UndefiedType</>;
    switch (block.type) {
      case WidgetEnum.BasisWidget:
        widgetComponent = <PlugWidgetComponent {...block} />;
        break;
    }
    return <WidgetWrapper {...block}>{widgetComponent}</WidgetWrapper>;
  }
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return <ContainerComponent {...block} />;
  }
  return <>Error block parsing: Undeifed type</>;
};
