import { WdigetPros, WidgetInfo } from '@/_types/system/widget';
import { FC } from 'react';

type WidgetProviderProps<T = any> = {
  widgetInfo: WidgetInfo;
  dataWidget: T | null;
  getWidgetData: (widgetConfg: WidgetInfo) => Promise<T>;
  children: FC<WdigetPros<T>>;
};
//Провайдер для вставки виджетов
const WidgetProvider: FC<WidgetProviderProps> = ({
  widgetInfo,
  dataWidget,
  getWidgetData,
  children,
}) => {
  console.log(
    'renderWidgetProvider',
    widgetInfo,
    dataWidget,
    getWidgetData,
    children,
  );
  //Проверяем есть ли виджет дата, если она есть, то сразу рисуем widget
  return <>{children}</>;
};

export default WidgetProvider;
