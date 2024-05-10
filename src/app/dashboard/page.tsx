import styles from './dashboard.module.scss';

type DashboardPageProps = {
  searchParams: { [key: string]: string };
};

export default function DashboardPage<DashboardPageProps>({ searchParams }) {
  console.log('renderDashboard', searchParams);

  return <main className={styles.main}>hi,world</main>;
}
