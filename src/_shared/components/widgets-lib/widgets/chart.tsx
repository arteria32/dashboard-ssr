import { Pie } from '@consta/charts/Pie';
import styles from './widgets.module.scss';
type Item = { type: string; value: number };

const data: Item[] = [
  { type: 'Вариант 1', value: 27 },
  { type: 'Вариант 2', value: 25 },
  { type: 'Вариант 3', value: 18 },
  { type: 'Вариант 4', value: 15 },
  { type: 'Вариант 5', value: 10 },
  { type: 'Вариант 6', value: 5 },
];

export function Chart() {
  return <div className={styles.chart}>Chart</div>;
}
