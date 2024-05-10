import { useEffect } from 'react';

export const useDebouncedEffect = (
  effect: () => unknown,
  deps: unknown[],
  delay: number,
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};
