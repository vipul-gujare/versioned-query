import { 
  useQuery, 
  UseQueryOptions, 
  UseQueryResult,
  QueryKey 
} from '@tanstack/react-query';
import type { QueryAdapter } from '@vipulgujare/create-versioned-query';

export interface TanStackQueryParams {
  queryKey: QueryKey;
  queryFn: () => Promise<any>;
  [key: string]: any;
}

export const tanstackAdapter: QueryAdapter
  TanStackQueryParams,
  UseQueryResult<any, any>
> = (params, options) => {
  return useQuery({
    ...params,
    enabled: !options.skip,
  });
};