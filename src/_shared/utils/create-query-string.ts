// Get a new searchParams string by merging the current

import { ReadonlyURLSearchParams } from 'next/navigation';

// searchParams with a provided key/value pair
export const createQueryString = (
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);

  return params.toString();
};
