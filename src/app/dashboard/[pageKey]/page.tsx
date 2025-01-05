import Plug from '@/_shared/components/plug/plug';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { useRouter } from 'next/router';
import { FC, Fragment, use } from 'react';
import { PageConfigClient } from '../../_sdk/PageConfigClient';
import { renderBlock } from '../_blocks';
import { USER_MODE_SEARCH_KEY, UserMode, isUserMode } from '../constants';
import styles from '../dashboard.module.scss';

type DashboardPageProps = {
  searchParams: Promise<{
    mode: string;
  }>;
  params: Promise<{ pageKey: string }>;
};

export const dynamic = 'force-dynamic';

const DashboardPage: FC<DashboardPageProps> = async ({
  params,
  searchParams,
}) => {
  const { pageKey } = await params;
  const { mode } = await searchParams;

  const uiConfig = await PageConfigClient.getPageConfigByKey(pageKey);

  const userMode = isUserMode(mode) ? mode : UserMode.View;
  console.log('USER_MODE', userMode);

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
