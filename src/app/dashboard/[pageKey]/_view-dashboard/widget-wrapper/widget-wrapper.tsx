import { ArrowUpRightFromSquare, CircleInfo } from '@gravity-ui/icons';
import { Card, Icon, Text, Tooltip } from '@gravity-ui/uikit';
import Link from 'next/link';
import { WidgetWrapperProps } from '../../../_blocks/types';
import styles from './widget-wrapper.module.scss';

const ViewWidgetWrapper = ({
  block,
  children,
  pageKey,
}: WidgetWrapperProps) => {
  const { id, name, description, size } = block;
  return (
    <Card
      className={styles.wrapper}
      view="raised"
      style={{
        flexGrow: size,
      }}
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <Text ellipsis variant="body-1">
            {name}
            {size}
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

export default ViewWidgetWrapper;
