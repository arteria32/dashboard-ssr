import { EChartsOption } from 'echarts';
import { ReactECharts } from '../echarts-wrapper/echarts-wrapper';

const EXAMPLE_OPTIONS: EChartsOption = {
  animation: false,
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

//Здесь минимальная логика на парсинг данных из конфига и полученных данных уже для графика
export function LineChart() {
  return <ReactECharts option={EXAMPLE_OPTIONS} />;
}
