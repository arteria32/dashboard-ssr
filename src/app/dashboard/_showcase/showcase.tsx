import { getUIConfigByIdObject } from '@/_services/uidata.api';
import Plug from '@/_shared/components/plug/plug';
import WidgetProviderWrapper from '@/_shared/components/widgets-lib/widget-provider';
import { getWidgetByName } from '@/_shared/components/widgets-lib/widgets-list';
import { DashboardConfig } from '@/_types/system/dashboard-config';
import { WidgetConfig, WidgetInfo } from '@/_types/system/widget';
import { FC } from 'react';
import styles from './showcase.module.scss';

type ShowcaseProps = {
  componentConfig: WidgetInfo;
  dataConfig: DashboardConfig;
};

//Информ витрина
const Showcase: FC<ShowcaseProps> = async ({ componentConfig, dataConfig }) => {
  const uiConfig = await getUIConfigByIdObject<WidgetConfig>(
    componentConfig.name,
  );

  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }
  const widgetBlocks = uiConfig.children?.map((item, index) => (
    <div className={styles.widget} key={`${item.name} ${index}`}>
      <WidgetProviderWrapper widgetInfo={item} dataWidget={[]}>
        {getWidgetByName(item.type)}
      </WidgetProviderWrapper>
    </div>
  ));

  return <div className={styles.main}>{widgetBlocks}</div>;
};

export default Showcase;
