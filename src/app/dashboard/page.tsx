import Plug from '@/_shared/components/plug/plug';
import { DashboardConfig } from '@/_types/system/dashboard-config';
import { FC, Fragment } from 'react';
import { PageConfigClient } from '../_sdk/PageConfigClient';
import { renderBlock } from './_blocks';
import styles from './dashboard.module.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

type DashboardPageProps = {
  searchParams: DashboardConfig;
};

const UI_CONFIG_NAME = 'TEST_CONFIG_DASHBOARD_8';

export const dynamic = 'force-dynamic';

const DashboardPage: FC<DashboardPageProps> = async () => {
  const uiConfig = await PageConfigClient.getPageConfigByKey(UI_CONFIG_NAME);
  console.log('uiConfig', uiConfig);
  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }

  return (
    <main className={styles.page}>
      <h3>{uiConfig.key}</h3>
      {uiConfig.content.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </main>
  );
};

export default DashboardPage;
