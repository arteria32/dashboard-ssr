import { FC } from 'react';
import styles from './plug.module.scss';

type PlugProps = {
  message: string;
};

const Plug: FC<PlugProps> = ({ message }) => {
  return (
    <div className={styles.plug}>
      <h3>{message}</h3>
    </div>
  );
};

export default Plug;
