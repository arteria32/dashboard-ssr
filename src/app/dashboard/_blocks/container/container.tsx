import { Block } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './container.module.scss';

type ContainerProps = Block;

const ContainerComponent: FC<ContainerProps> = () => {
  return <section className={styles.container}>Container</section>;
};

export default ContainerComponent;
