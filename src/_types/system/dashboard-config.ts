export enum QueryParamsEnum {
  ID_OBJECT = 'idObject',
  FROM = 'from',
  TO = 'to',
}

export type DashboardConfig = {
  [key in QueryParamsEnum]: string | null;
};
