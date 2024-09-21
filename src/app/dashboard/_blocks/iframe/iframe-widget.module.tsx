import { Block } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './iframe-widget.module.scss';
import { Card } from '@gravity-ui/uikit';

type IFrameWidgetProps = Block;

export const IFrameWidget: FC<IFrameWidgetProps> = () => {
  return (
    <Card className={styles.body}>
      <iframe
        className={styles.frame}
        allowFullScreen
        src="https://www.example.com/"
      />
    </Card>
  );
};
