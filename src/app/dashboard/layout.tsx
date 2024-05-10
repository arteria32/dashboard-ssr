import Toolbox from './_toolbox/toolbox';
import styles from './dashboard.module.scss';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.main}>
      <section className={styles.toolbox}>
        <Toolbox />
      </section>
      <section className={styles.layoutContainer}>{children}</section>
    </div>
  );
}
