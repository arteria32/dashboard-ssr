import { Block } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './plug-widget.module.scss';

type ContainerProps = Block;

const PlugWidgetComponent: FC<ContainerProps> = () => {
  return <div className={styles.body}>PlugWidget</div>;
};

export default PlugWidgetComponent;
