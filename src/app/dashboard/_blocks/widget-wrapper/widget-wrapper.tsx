import { Block } from '@/_types/features/dashboard';
import { FC, PropsWithChildren } from 'react';
import styles from './widget-wrapper.module.scss';
import { Card, Icon, Text, Tooltip } from '@gravity-ui/uikit';
import { CircleInfo } from '@gravity-ui/icons';

type ContainerProps = Block & PropsWithChildren;

const WidgetWrapper: FC<ContainerProps> = ({ name, description, children }) => {
  return (
    <Card className={styles.wrapper} view="filled">
      <div className={styles.header}>
        <div className={styles.left}>
          <Text ellipsis variant="body-1">
            {name}
          </Text>
        </div>
        <div className={styles.right}>
          {description && (
            <Tooltip content={description} placement="top-end">
              <Icon data={CircleInfo} />
            </Tooltip>
          )}
        </div>
      </div>
      <>{children}</>
    </Card>
  );
};

export default WidgetWrapper;
