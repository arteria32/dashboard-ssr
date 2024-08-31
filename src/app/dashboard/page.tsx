import Plug from '@/_shared/components/plug/plug';
import { DashboardConfig } from '@/_types/system/dashboard-config';
import { FC } from 'react';
import { PageConfigClient } from '../_sdk/PageConfigClient';
import styles from './dashboard.module.scss';

type DashboardPageProps = {
  searchParams: DashboardConfig;
};

const UI_CONFIG_NAME = 'goodDashboard';

export const dynamic = 'force-dynamic';

const DashboardPage: FC<DashboardPageProps> = async ({ searchParams }) => {
  const { idObject, from, to } = searchParams;
  if (!idObject || !from || !to) {
    return <Plug message={'Не хватает нужных параметров'} />;
  }
  const uiConfig = await PageConfigClient.getPageConfigByKey(UI_CONFIG_NAME);
  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }

  return (
    <main className={styles.page}>
      <section className={styles.showcase}>
        {/* <Showcase
          componentConfig={uiConfig.showcaseConfig}
          dataConfig={{ idObject, from, to }}
        /> */}
      </section>
      <section className={styles.mainBlock}>heatmap</section>
    </main>
  );
};

export default DashboardPage;
