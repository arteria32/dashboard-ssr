import { IFrameWidgetBlock } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './iframe-widget.module.scss';

type IFrameWidgetProps = IFrameWidgetBlock;

export const IFrameWidget: FC<IFrameWidgetProps> = ({ source }) => {
  return (
    <div className={styles.body}>
      <iframe className={styles.frame} allowFullScreen src={source} />
    </div>
  );
};
