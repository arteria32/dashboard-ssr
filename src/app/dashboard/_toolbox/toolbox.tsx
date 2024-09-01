import cn from 'classnames';
import styles from './toolbox.module.scss';

// const getDateRangeFromConfig = (
//   config: DashboardConfig,
// ): [Date | undefined, Date | undefined] => [
//   config.from ? new Date(config.from) : undefined,
//   config.to ? new Date(config.to) : undefined,
// ];

//Toolbox для настройки сценариев отображения
export default function Toolbox() {
  // const router = useRouter();

  // const params = useSearchParams();
  // const idObject = params.get(QueryParamsEnum.ID_OBJECT);
  // const from = params.get(QueryParamsEnum.FROM);
  // const to = params.get(QueryParamsEnum.TO);
  // const [dashboardConfig, setDashboardConfig] = useState<DashboardConfig>({
  //   idObject,
  //   from,
  //   to,
  // });

  // const handleChange = (
  //   value: string | null | undefined,
  //   paramName: QueryParamsEnum,
  // ) => {
  //   setDashboardConfig((prevState) => ({ ...prevState, [paramName]: value }));
  // };

  // useDebouncedEffect(
  //   () => {
  //     const url = new URL(window.location.href);
  //     for (const [key, value] of Object.entries(dashboardConfig)) {
  //       if (!value) continue;
  //       url.searchParams.set(key, value);
  //     }
  //     router.push(url.toString());
  //   },
  //   [dashboardConfig],
  //   300,
  // );

  return (
    <div className={styles.main}>
      <section className={cn(styles.block, styles.left)}>left</section>
      <section className={cn(styles.block, styles.right)}>right</section>
    </div>
  );
}
