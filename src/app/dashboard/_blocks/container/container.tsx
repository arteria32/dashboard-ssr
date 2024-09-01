import { Block } from '@/_types/features/dashboard';
import { FC, Fragment } from 'react';
import styles from './container.module.scss';
import { renderBlock } from '..';

type ContainerProps = Block;

const ContainerComponent: FC<ContainerProps> = ({ body }) => {
  return (
    <section className={styles.container}>
      {body?.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </section>
  );
};

export default ContainerComponent;
