import Plug from '@/_shared/components/plug/plug';
import WidgetProviderWrapper from '@/_shared/components/widgets-lib/widget-provider';
import { Chart } from '@/_shared/components/widgets-lib/widgets/chart';
import { DashboardConfig } from '@/_types/system/dashboard-config';
import { WidgetConfig, WidgetInfo } from '@/_types/system/widget';
import { FC } from 'react';
import styles from './showcase.module.scss';
import { getUIConfigByIdObject } from '@/_services/uidata.api';

type ShowcaseProps = {
  componentConfig: WidgetInfo;
  dataConfig: DashboardConfig;
};

//Информ витрина
const Showcase: FC<ShowcaseProps> = async ({ componentConfig, dataConfig }) => {
  console.log('renderShowCase', componentConfig, dataConfig);
  const uiConfig = await getUIConfigByIdObject<WidgetConfig>(
    componentConfig.name,
  );

  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }
  const widgetBlocks = uiConfig.children?.map((item, index) => (
    <div className={styles.widget} key={`${item.name} ${index}`}>
      <WidgetProviderWrapper widgetInfo={item} dataWidget={[]}>
        {Chart}
      </WidgetProviderWrapper>
    </div>
  ));

  return <div className={styles.main}>{widgetBlocks}</div>;
};

export default Showcase;
