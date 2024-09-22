import Plug from '@/_shared/components/plug/plug';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { FC } from 'react';

export const dynamic = 'force-dynamic';

const InitDashboardPage: FC = async () => {
  return <Plug message={'Дефолтная страница  '} />;
};

export default InitDashboardPage;
