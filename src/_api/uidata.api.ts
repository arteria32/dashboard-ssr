import mocs from './mocs/mocs-uidata.json';

export function getUIConfigByIdObject<T>(
  configName: string,
  idObject?: string,
): T {
  console.log('getUIConfigByIdObject', configName, idObject);
  const key = configName;
  const res = (mocs as any)[key];
  return res as T;
}
