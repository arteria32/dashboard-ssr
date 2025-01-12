import { Block, DashboardStructure } from '@/_types/features/dashboard';
import { useCallback, useMemo, useState } from 'react';

export enum BlockChangesEnum {
  update = 'update',
}

export type ChangesLog = Record<string, BlockChangesEnum>;

export const useBlocksDict = (dashboard: DashboardStructure) => {
  const blocksMap = useMemo(() => {
    const blockMap = new Map<string, Block>();
    let blockStack = [...dashboard.content];
    let curBlock;
    while (blockStack.length) {
      curBlock = blockStack.pop();
      if (!curBlock) continue;
      blockStack = [...blockStack, ...(curBlock?.body || [])];
      blockMap.set(curBlock.id, curBlock);
    }
    return blockMap;
  }, [dashboard]);

  const [changesLog, setChangesLog] = useState({});

  const onBlockChange = useCallback(
    ({ id, props }: { id: string; props: Partial<Block> }) => {
      let curBlock = blocksMap.get(id);
      console.log('onBlockChange', id, props);
      if (!curBlock) {
        // eslint-disable-next-line no-console
        console.warn('block was not founded');
        return;
      }
      setChangesLog((curLog) => ({ ...curLog, [id]: BlockChangesEnum.update }));
      curBlock = { ...curBlock, ...props };
    },
    [blocksMap],
  );

  return {
    onBlockChange,
    changesLog,
  };
};
