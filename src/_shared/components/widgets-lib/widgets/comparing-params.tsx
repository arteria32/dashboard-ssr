import { RadarChart } from '../../radar-chart/radar-chart';
import styles from './widgets.module.scss';

//Здесь минимальная логика на парсинг данных из конфига и полученных данных уже для графика
const ComparingParamsWidget = () => {
  return (
    <div className={styles.chart}>
      <RadarChart />
    </div>
  );
};

export default ComparingParamsWidget;
