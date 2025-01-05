'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import { Switch } from '@gravity-ui/uikit';
import { createQueryString } from '@/_shared/utils/create-query-string';
import { USER_MODE_SEARCH_KEY, UserMode, isUserMode } from '../../constants';

const ModeSwitcher: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const router = useRouter();

  const modeParam = searchParams.get(USER_MODE_SEARCH_KEY);
  const userMode = isUserMode(modeParam) ? modeParam : UserMode.View;
  const onModeUpdate = useCallback(
    (isEdit: boolean) => {
      const newMode = isEdit ? UserMode.Edit : UserMode.View;
      router.push(
        pathname +
          '?' +
          createQueryString(USER_MODE_SEARCH_KEY, newMode, searchParams),
      );
    },
    [pathname, router, searchParams],
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
