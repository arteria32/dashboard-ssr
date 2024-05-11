import { FC } from 'react';
import styles from './dashboard.module.scss';
import { getUIConfigByIdObject } from '@/_api/uidata.api';
import Plug from '@/_shared/components/plug/plug';
import { WidgetInfo } from '@/_types/system/widget';
import Showcase from './_showcase/showcase';
import { DashboardConfig } from '@/_types/system/dashboard-config';

type DashboardPageProps = {
  searchParams: DashboardConfig;
};

type DashboardUIConfig = {
  showcaseConfig: WidgetInfo;
  mainBlockConfig: WidgetInfo;
};
const UI_CONFIG_NAME = 'MainPage';

export const dynamic = 'force-dynamic';

const DashboardPage: FC<DashboardPageProps> = async ({ searchParams }) => {
  const { idObject, from, to } = searchParams;
  if (!idObject || !from || !to) {
    return <Plug message={'Не хватает нужных параметров'} />;
  }
  const uiConfig = getUIConfigByIdObject<DashboardUIConfig>(UI_CONFIG_NAME);
  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }

  return (
    <main className={styles.page}>
      <section className={styles.showcase}>
        <Showcase
          componentConfig={uiConfig.showcaseConfig}
          dataConfig={{ idObject, from, to }}
        />
      </section>
      <section className={styles.mainBlock}>heatmap</section>
    </main>
  );
};

export default DashboardPage;
