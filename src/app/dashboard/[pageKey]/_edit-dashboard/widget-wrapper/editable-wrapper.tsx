import { WidgetWrapperProps } from '@/app/dashboard/_blocks/types';
import styles from './editable-wrapper.module.scss';

const EditableWrapper = ({ children, block }: WidgetWrapperProps) => {
  const { size } = block;
  return (
    <div
      className={styles.wrapper}
      style={{
        flexGrow: size,
      }}
    >
      Editable{children}
    </div>
  );
};

export default EditableWrapper;
