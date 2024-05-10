//Минимальный набор информации о виджете, без возможности забора данных
export type WidgetInfo<T = string, P = string> = {
  name: string; //название для забора конфигов
  displayName: string; //название для отображение на экране
  type?: T; //тип, определяющий внешний вид виджета
  providerType?: P; // тип, определяющий формат забора данных
  specifyByIdObject?: boolean; //Кастомизируется ли конфиг для конкретных  объектов
};
//Полная информация с возможностью забора данных

export type WidgetConfig<
  ConfigType = any,
  TypeEnum = string,
  СhildrenType = WidgetInfo[],
> = WidgetInfo<TypeEnum> & {
  children?: СhildrenType; //Дочерние виджеты
  config?: ConfigType; //конфиг для парсинга данных
};

export type WidgetData<T = any> = { [key: string]: T };

export type WdigetPros<T = any> = {
  data: WidgetData<T>; //ключ-это связка с отображением, куда надо вставить какие-то данные
  config: WidgetConfig; //Конфиг виджета, необходимый для парсинга и отображения данных
};
