import styles from './monitoring.module.scss';

type MonitoringPageProps = {
  searchParams: { [key: string]: string };
};

export default function MonitoringPage<MonitoringPageProps>({ searchParams }) {
  const { idObject, from, to } = searchParams;
  console.log('renderDashboard', idObject, from, to);

  return <main className={styles.main}>Monitoirng</main>;
}
