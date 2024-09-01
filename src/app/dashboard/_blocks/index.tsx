import { Block, ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import ContainerComponent from './container/container';
import PlugWidgetComponent from './plug-widget/plug-widget';

export const renderBlock = (block: Block) => {
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return <ContainerComponent {...block} />;
    case WidgetEnum.BasisWidget:
    default:
      return <PlugWidgetComponent {...block} />;
  }
};
