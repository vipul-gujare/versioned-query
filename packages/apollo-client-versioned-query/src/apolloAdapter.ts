import {
  useQuery,
  DocumentNode,
  TypedDocumentNode,
  QueryHookOptions,
  QueryResult,
  OperationVariables,
} from "@apollo/client";
import type { QueryAdapter } from "@vipulgujare/create-versioned-query";

export interface ApolloQueryParams {
  query: DocumentNode | TypedDocumentNode<any, any>;
  variables?: any;
  options?: Omit<QueryHookOptions<any, any>, "query" | "variables" | "skip">;
}

export const apolloAdapter: QueryAdapter<
  ApolloQueryParams,
  QueryResult<any, any>
> = (params, options) => {
  return useQuery(params.query, {
    variables: params.variables,
    skip: options.skip,
    ...params.options,
  });
};
