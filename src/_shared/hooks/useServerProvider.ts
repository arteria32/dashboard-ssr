import { cache } from 'react';

const serverContext = cache(() => new Map());
/**
 *Hook for sharing context between server components
@example 
Parent: const [count, setCount] = useServerProvider('count', 23);
Child: const [count] = useServerProvider<number>('count');

 */
export const useServerProvider = <T>(key: string, defaultValue?: T) => {
  const global = serverContext();

  if (defaultValue !== undefined) {
    global.set(key, defaultValue);
  }

  return [global.get(key), (value: T) => global.set(key, value)];
};
