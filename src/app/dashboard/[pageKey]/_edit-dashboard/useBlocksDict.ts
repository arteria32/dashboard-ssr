import { Block, DashboardStructure } from '@/_types/features/dashboard';
import { useCallback, useMemo } from 'react';

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

  const onBlockChange = useCallback(
    ({ id, props }: { id: string; props: Partial<Block> }) => {
      let curBlock = blocksMap.get(id);

      if (!curBlock) {
        // eslint-disable-next-line no-console
        console.warn('block was not founded');
        return;
      }
      curBlock = { ...curBlock, ...props };
    },
    [blocksMap],
  );

  return {
    onBlockChange,
  };
};
