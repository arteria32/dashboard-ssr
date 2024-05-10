//Минимальный набор информации о виджете, без возможности забора данных
export type WidgetInfo<T = string> = {
  name: string; //название для забора конфигов
  displayName: string; //название для отображение на экране
  type?: T; //тип, который может уточнять поведение виджета или его обработку родителем
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

export type WdigetPros<T = any> = {
  data: { [key: string]: T }; //ключ-это связка с отображением, куда надо вставить какие-то данные
  config: WidgetConfig; //Конфиг виджета, необходимый для парсинга и отображения данных
};
