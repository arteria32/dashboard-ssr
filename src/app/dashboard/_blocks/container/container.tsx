import { FC, Fragment } from 'react';
import DashboardBlock from '..';
import { DashboardBlockProps } from '../types';
import styles from './container.module.scss';

const ContainerComponent: FC<DashboardBlockProps> = ({
  block,
  pageKey,
  renderWidget,
}) => {
  const { body } = block;
  return (
    <section className={styles.container}>
      {body?.map((item) => (
        <Fragment key={item.id}>
          {
            <DashboardBlock
              block={item}
              pageKey={pageKey}
              renderWidget={renderWidget}
            />
          }
        </Fragment>
      ))}
    </section>
  );
};

export default ContainerComponent;
