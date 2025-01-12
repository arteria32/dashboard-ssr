'use client';

import { WidgetWrapperProps } from '@/app/dashboard/_blocks/types';
import styles from './editable-wrapper.module.scss';
import { Block } from '@/_types/features/dashboard';
import { useCallback, useState } from 'react';
import { Button } from '@gravity-ui/uikit';
import { Minus, Plus } from '@gravity-ui/icons';
type EditableWrapperProps = WidgetWrapperProps & {
  onBlockChange: (args: { id: string; props: Partial<Block> }) => void;
};
const EditableWrapper = ({
  children,
  block,
  onBlockChange,
}: EditableWrapperProps) => {
  const { size, id } = block;
  const [currentSize, setCurrentSize] = useState(size);

  const onSizeChange = useCallback(
    (newSize: number) => {
      let size = newSize;
      if (newSize <= 0) {
        alert("Can't reduce widget size lower then 1");
        size = 1;
      }
      setCurrentSize(size);
      onBlockChange({ id, props: { size } });
    },
    [id, onBlockChange],
  );

  const incrementSize = useCallback(() => {
    onSizeChange(Number(currentSize) + 1);
  }, [currentSize, onSizeChange]);

  const decrementSize = useCallback(() => {
    onSizeChange(Number(currentSize) - 1);
  }, [currentSize, onSizeChange]);
  return (
    <div
      className={styles.wrapper}
      style={{
        flexGrow: currentSize,
      }}
    >
      <div className={styles.header}>
        <div className={styles.buttonsBlock}>
          <Button onClick={() => decrementSize()} size="s">
            <Minus />
          </Button>
          <Button onClick={() => incrementSize()} size="s">
            <Plus />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default EditableWrapper;
