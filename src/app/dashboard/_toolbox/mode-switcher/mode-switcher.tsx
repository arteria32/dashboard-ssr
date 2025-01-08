'use client';

import { createQueryString } from '@/_shared/utils/create-query-string';
import { DashboardState } from '@/_types/features/dashboard';
import { DashboardConfigClient } from '@/app/_sdk/DashboardConfigClient';
import { Switch } from '@gravity-ui/uikit';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { USER_MODE_SEARCH_KEY, UserMode, isUserMode } from '../../constants';

const ModeSwitcher = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const { pageKey } = useParams<{ pageKey: string }>();

  const modeParam = searchParams.get(USER_MODE_SEARCH_KEY);
  const userMode = isUserMode(modeParam) ? modeParam : UserMode.View;

  const [dashboardState, setDashboardState] = useState<DashboardState>(
    DashboardState.Working,
  );

  useEffect(() => {
    const updateState = async () => {
      const newState =
        await DashboardConfigClient.getDashboardStateByKey(pageKey);
      setDashboardState(newState);
    };
    updateState();
  }, [pageKey]);
  const onModeUpdate = useCallback(
    (isEdit: boolean) => {
      const newMode = isEdit ? UserMode.Edit : UserMode.View;
      const isModeBlocked = dashboardState === DashboardState.Changing;
      if (isModeBlocked) {
        const isApprovedChanges = confirm(
          'The dashboard is now being changed by different user',
        );
        if (!isApprovedChanges) return;
      }
      router.push(
        pathname +
          '?' +
          createQueryString(USER_MODE_SEARCH_KEY, newMode, searchParams),
      );
    },
    [pathname, router, searchParams, dashboardState],
  );

  return (
    <>
      <Switch
        size="l"
        checked={userMode === UserMode.Edit}
        onUpdate={onModeUpdate}
      >
        <span>Edit mode</span>
      </Switch>
    </>
  );
};
export default ModeSwitcher;
