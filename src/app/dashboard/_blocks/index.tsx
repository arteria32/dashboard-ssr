import { Block, ContainerEnum, WidgetEnum } from '@/_types/features/dashboard';
import ContainerComponent from './container/container';

export const renderBlock = (block: Block) => {
  switch (block.type) {
    case ContainerEnum.BasicContainer:
      return <ContainerComponent {...block} />;
    case WidgetEnum.BasisWidget:
    default:
      return (
        <div>
          <h5>undefied block</h5>
        </div>
      );
  }
};
