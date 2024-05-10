'use client';
import { useDebouncedEffect } from '@/_shared/hooks/useDebouncedEffect';
import { DatePicker } from '@consta/uikit/DatePicker';
import { TextField } from '@consta/uikit/TextField';
import cn from 'classnames';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './toolbox.module.scss';

enum QueryParamsEnum {
  ID_OBJECT = 'idObject',
  FROM = 'from',
  TO = 'to',
}

type DashboardConfig = {
  [key in QueryParamsEnum]: string | null;
};

const getDateRangeFromConfig = (
  config: DashboardConfig,
): [Date | undefined, Date | undefined] => [
  config.from ? new Date(config.from) : undefined,
  config.to ? new Date(config.to) : undefined,
];

//Toolbox для настройки сценариев отображения
export default function Toolbox() {
  const router = useRouter();

  const params = useSearchParams();
  const idObject = params.get(QueryParamsEnum.ID_OBJECT);
  const from = params.get(QueryParamsEnum.FROM);
  const to = params.get(QueryParamsEnum.TO);
  const [dashboardConfig, setDashboardConfig] = useState<DashboardConfig>({
    idObject,
    from,
    to,
  });

  const handleChange = (
    value: string | null | undefined,
    paramName: QueryParamsEnum,
  ) => {
    setDashboardConfig((prevState) => ({ ...prevState, [paramName]: value }));
  };

  useDebouncedEffect(
    () => {
      const url = new URL(window.location.href);
      for (const [key, value] of Object.entries(dashboardConfig)) {
        if (!value) continue;
        url.searchParams.set(key, value);
      }
      router.push(url.toString());
      router.refresh();
    },
    [dashboardConfig],
    300,
  );

  return (
    <div className={styles.main}>
      <section className={cn(styles.block, styles.left)}>
        <TextField
          size="s"
          onChange={(value) => handleChange(value, QueryParamsEnum.ID_OBJECT)}
          value={dashboardConfig.idObject}
          type="text"
          placeholder="Название объекта"
        />
      </section>
      <section className={cn(styles.block, styles.right)}>
        <DatePicker
          type="date-range"
          size="s"
          value={getDateRangeFromConfig(dashboardConfig)}
          onChange={(dateRange) => {
            handleChange(dateRange?.[0]?.toISOString(), QueryParamsEnum.FROM);
            handleChange(dateRange?.[1]?.toISOString(), QueryParamsEnum.TO);
          }}
        />
      </section>
    </div>
  );
}
