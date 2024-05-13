import { FC } from 'react';
import ComparingParamsWidget from './widgets/comparing-params';
import PropsViewerWidget from './widgets/props-viewer';
import TimeSeriesChart from './widgets/time-series-chart';

type WidgetList = { [key: string]: FC };

const WIDGETS_LIST: WidgetList = {
  Chart: TimeSeriesChart,
  ComparingParams: ComparingParamsWidget,
  PropsViewer: PropsViewerWidget,
};

const Plug = () => <>Виджет не найден</>;

export const getWidgetByName = (name = 'default'): FC => {
  return WIDGETS_LIST[name] ?? Plug;
};
