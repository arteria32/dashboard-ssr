export type WidgetConfig<T = string> = {
  name: string;
  displayName: string;
  type?: T;
};
