import { Button, Flex, Link } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { FC } from 'react';
import styles from './dashboard.module.scss';

const InitDashboardPage: FC = async () => {
  return (
    <div className={styles.page}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
        className={styles.buttonsList}
      >
        <Link href="./create-dashboard">
          <Button size="xl">Create new dashboard</Button>
        </Link>
      </Flex>
    </div>
  );
};

export default InitDashboardPage;
