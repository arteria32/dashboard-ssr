import { WidgetWrapperProps } from '../../types';
import styles from './editable-wrapper.module.scss';

const EditableWrapper = ({ children }: WidgetWrapperProps) => {
  return <div className={styles.wrapper}>Editable{children}</div>;
};

export default EditableWrapper;
