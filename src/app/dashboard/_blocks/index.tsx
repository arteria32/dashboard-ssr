import { ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import { FC, ReactNode } from 'react';
import ContainerComponent from './container/container';
import { IFrameWidget } from './iframe/iframe-widget.module';
import PlugWidgetComponent from './plug-widget/plug-widget';
import { isIFrameWidget } from './type-guards';
import { DashboardBlockProps, WidgetWrapperProps } from './types';

const WIDGET_TYPES = new Set<string>(Object.values(WidgetEnum));

export const DashboardBlock: FC<DashboardBlockProps> = ({
  block,
  pageKey,
  renderWidget,
}) => {
  if (WIDGET_TYPES.has(block.type)) {
    let widgetComponent: ReactNode = <>Undefined type</>;
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
    return renderWidget({
      children: widgetComponent,
      block,
      renderWidget,
    });
  }
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return (
        <ContainerComponent
          block={block}
          pageKey={pageKey}
          renderWidget={renderWidget}
        />
      );
  }
  return <>Error block parsing: Undefined type</>;
};

export default DashboardBlock;
