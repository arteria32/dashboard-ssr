import Plug from '@/_shared/components/plug/plug';
import { DashboardConfig } from '@/_types/system/dashboard-config';
import { FC, Fragment } from 'react';
import { PageConfigClient } from '../../_sdk/PageConfigClient';
import { renderBlock } from '../_blocks';
import styles from '../dashboard.module.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

type DashboardPageProps = {
  searchParams: DashboardConfig;
  params: { pageKey: string };
};

export const dynamic = 'force-dynamic';

const DashboardPage: FC<DashboardPageProps> = async ({
  params: { pageKey },
}) => {
  const uiConfig = await PageConfigClient.getPageConfigByKey(pageKey);
  if (!uiConfig) {
    return <Plug message={'Отсутствует конфигурационный файл '} />;
  }

  return (
    <main className={styles.page}>
      <h3>{uiConfig.key}</h3>
      {uiConfig.content.map((block) => (
        <Fragment key={block.id}>{renderBlock(block, pageKey)}</Fragment>
      ))}
    </main>
  );
};

export default DashboardPage;
