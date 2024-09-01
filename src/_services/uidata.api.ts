import mocs from './mocs/mocs-uidata.json';

export async function getUIConfigByIdObject<T>(
  configName: string,
  idObject?: string,
): Promise<T> {
  const key = configName;
  const res = (mocs as any)[key];
  return res as T;
}
