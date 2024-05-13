import { getUIConfigByIdObject } from '@/_services/uidata.api';
import { WdigetPros, WidgetConfig, WidgetInfo } from '@/_types/system/widget';
import { FC, Suspense } from 'react';

type WidgetProviderProps<T = any> = {
  children: FC<WdigetPros<T>>;
  widgetInfo: WidgetInfo;
  dataWidget: T | null;
  getWidgetData?: (widgetConfg: WidgetInfo) => Promise<T>;
};
//Провайдер для вставки виджетов
const WidgetProvider: FC<WidgetProviderProps> = async ({
  widgetInfo,
  dataWidget,
  getWidgetData = () => null,
  children,
}) => {
  //Проверяем есть ли виджет дата, если она есть, то сразу рисуем widget
  const uiConfig = await getUIConfigByIdObject<WidgetConfig>(widgetInfo.name);
  if (!uiConfig) return <>Нет конфиг файла</>;
  const data = dataWidget ?? (await getWidgetData(uiConfig));
  return <>{children({ data, config: uiConfig })}</>;
};

const WidgetProviderWrapper: FC<WidgetProviderProps> = (props) => {
  return (
    <Suspense fallback={<p>Loading widget...</p>}>
      <WidgetProvider {...props} />
    </Suspense>
  );
};

export default WidgetProviderWrapper;
