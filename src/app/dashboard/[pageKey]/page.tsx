import Plug from '@/_shared/components/plug/plug';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { FC } from 'react';
import { PageConfigClient } from '../../_sdk/PageConfigClient';
import EditDashboardWrapper from './_edit-dashboard/edit-dashboard';
import { UserMode, isUserMode } from '../constants';
import styles from '../dashboard.module.scss';
import ViewDashboardWrapper from './_view-dashboard/view-dashboard';
type DashboardPageProps = {
  searchParams: Promise<{
    mode: string;
  }>;
  params: Promise<{ pageKey: string }>;
};

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
      {userMode === UserMode.View ? (
        <ViewDashboardWrapper dashboard={uiConfig} />
      ) : (
        <EditDashboardWrapper dashboard={uiConfig} />
      )}
    </main>
  );
};

export default DashboardPage;
