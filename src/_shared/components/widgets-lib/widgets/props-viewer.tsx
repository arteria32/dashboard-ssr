import { PieChart } from '../../pie-chart/pie-chart';
import styles from './widgets.module.scss';

//Здесь минимальная логика на парсинг данных из конфига и полученных данных уже для графика
const PropsViewerWidget = () => {
  return (
    <div className={styles.chart}>
      <PieChart />
    </div>
  );
};

export default PropsViewerWidget;
