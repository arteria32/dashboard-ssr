import { Flex, Text } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { FC } from 'react';
import styles from './create.module.scss';

const CreateDashboardPage: FC = async () => {
  return (
    <div className={styles.page}>
      <Flex direction="column" gap={3}>
        <Text>Create new dashboard</Text>
      </Flex>
    </div>
  );
};

export default CreateDashboardPage;
