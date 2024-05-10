import { DashboardConfig } from '@/_types/system/dashboard-config';
import { WidgetConfig, WidgetInfo } from '@/_types/system/widget';
import { FC } from 'react';
import styles from './showcase.module.scss';
import { getUIConfigByIdObject } from '@/_api/uidata.api';
import Plug from '@/_shared/components/plug/plug';

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

  return <div className={styles.main}>ShowCase</div>;
};

export default Showcase;
