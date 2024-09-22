import { Block } from '@/_types/features/dashboard';
import { ArrowUpRightFromSquare, CircleInfo } from '@gravity-ui/icons';
import { Card, Icon, Text, Tooltip } from '@gravity-ui/uikit';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styles from './widget-wrapper.module.scss';

type ContainerProps = Block & PropsWithChildren & { pageKey?: string };

const WidgetWrapper: FC<ContainerProps> = ({
  id,
  name,
  description,
  children,
  pageKey,
}) => {
  return (
    <Card className={styles.wrapper} view="raised">
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
          <Link
            href={`/dashboard${pageKey ? `/${pageKey}` : ''}/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon data={ArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </Card>
  );
};

export default WidgetWrapper;
