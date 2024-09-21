import { IFrameWidgetBlock } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './iframe-widget.module.scss';
import { Card } from '@gravity-ui/uikit';

type IFrameWidgetProps = IFrameWidgetBlock;

export const IFrameWidget: FC<IFrameWidgetProps> = ({ source }) => {
  return (
    <Card className={styles.body}>
      <iframe className={styles.frame} allowFullScreen src={source} />
    </Card>
  );
};
