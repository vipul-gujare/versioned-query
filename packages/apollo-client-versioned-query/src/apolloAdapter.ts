import { DocumentNode, TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

import type { QueryAdapter } from "@vipulgujare/create-versioned-query";

export interface ApolloQueryParams {
  query: DocumentNode | TypedDocumentNode<any, any>;
  variables?: any;
  options?: Omit<useQuery.Options, "query" | "variables" | "skip">;
}

export const apolloAdapter: QueryAdapter<
  ApolloQueryParams,
  useQuery.Result<any, any>
> = (params, options) => {
  return useQuery(params.query, {
    variables: params.variables,
    skip: options.skip,
    ...params.options,
  });
};
