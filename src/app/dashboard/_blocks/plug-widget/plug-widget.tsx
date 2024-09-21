import { Block } from '@/_types/features/dashboard';
import { FC } from 'react';
import styles from './plug-widget.module.scss';
import { CircleQuestion } from '@gravity-ui/icons';
import { Card, Icon, Text, Tooltip } from '@gravity-ui/uikit';

type ContainerProps = Block;

const PlugWidgetComponent: FC<ContainerProps> = ({
  name,
  description,
  id,
  type,
}) => {
  return (
    <Card className={styles.body}>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Text>{type}</Text>
      <Tooltip content={description}>
        <Icon data={CircleQuestion} />
      </Tooltip>
    </Card>
  );
};

export default PlugWidgetComponent;
