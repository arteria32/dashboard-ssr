'use client';

import { DashboardStructure } from '@/_types/features/dashboard';
import { ToastAction } from '@gravity-ui/uikit';
import { toaster } from '@gravity-ui/uikit/toaster-singleton-react-18';
import { usePathname, useRouter } from 'next/navigation';
import { FC, Fragment, useCallback, useEffect, useMemo } from 'react';
import DashboardBlock from '../../_blocks';
import { useBlocksDict } from './useBlocksDict';
import EditableWrapper from './widget-wrapper/editable-wrapper';

type EditDashboardWrapperProps = { dashboard: DashboardStructure };

const EditDashboardWrapper: FC<EditDashboardWrapperProps> = ({ dashboard }) => {
  const { onBlockChange, changesLog } = useBlocksDict(dashboard);
  const countChanges = Object.values(changesLog).length;

  const pathname = usePathname();
  const router = useRouter();

  const resetAll = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);

  const toasterActions = useMemo<ToastAction[]>(() => {
    return [
      { onClick: resetAll, label: 'Reset Changes', view: 'outlined-warning' },
    ];
  }, [resetAll]);

  useEffect(() => {
    if (!countChanges) {
      toaster.removeAll();
      return;
    }
    toaster.add({
      title: `You have a ${countChanges} changed block`,
      name: 'Unsaved changes',
      autoHiding: false,
      isClosable: false,
      actions: toasterActions,
    });
  }, [countChanges, toasterActions]);
  return (
    <Fragment>
      {dashboard.content.map((block) => (
        <DashboardBlock
          key={block.id}
          block={block}
          renderWidget={(props) => (
            <EditableWrapper {...props} onBlockChange={onBlockChange} />
          )}
        />
      ))}
      {countChanges}
    </Fragment>
  );
};

export default EditDashboardWrapper;
