import { LineChart } from '../../line-chart/line-chart';
import styles from './widgets.module.scss';

//Здесь минимальная логика на парсинг данных из конфига и полученных данных уже для графика
const TimeSeriesChart = () => {
  return (
    <div className={styles.chart}>
      <LineChart />
    </div>
  );
};

export default TimeSeriesChart;
