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
      setCurrentSize(newSize);
      onBlockChange({ id, props: { size: newSize } });
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
      <div>
        Change Size:
        <Button onClick={() => decrementSize()}>
          <Minus />
        </Button>
        <Button onClick={() => incrementSize()}>
          <Plus />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default EditableWrapper;
