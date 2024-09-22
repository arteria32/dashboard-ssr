import { Block, ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import { ReactNode } from 'react';
import ContainerComponent from './container/container';
import { IFrameWidget } from './iframe/iframe-widget.module';
import PlugWidgetComponent from './plug-widget/plug-widget';
import { isIFrameWidget } from './type-guards';
import WidgetWrapper from './widget-wrapper/widget-wrapper';

const WIDGET_TYPES = new Set<string>(Object.values(WidgetEnum));

export const renderBlock = (block: Block, pageKey?: string) => {
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
    return (
      <WidgetWrapper {...block} pageKey={pageKey}>
        {widgetComponent}
      </WidgetWrapper>
    );
  }
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return <ContainerComponent {...block} pageKey={pageKey} />;
  }
  return <>Error block parsing: Undeifed type</>;
};
