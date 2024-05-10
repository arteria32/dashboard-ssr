import { FC } from 'react';
import styles from './dashboard.module.scss';
import { getUIConfigByIdObject } from '@/_api/uidata.api';
import Plug from '@/_shared/components/plug/plug';
import { WidgetConfig } from '@/_types/system/widget';

type DashboardPageProps = {
  searchParams: { [key: string]: string };
};

type DashboardUIConfig = {
  showcaseConfig: WidgetConfig;
  mainBlockConfig: WidgetConfig;
};
const UI_CONFIG_NAME = 'MainPage';

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
      <section className={styles.showcase}>showcase</section>
      <section className={styles.mainBlock}>heatmap</section>
    </main>
  );
};

export default DashboardPage;
