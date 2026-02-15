import { createVersionedQuery } from "@vipulgujare/create-versioned-query";
import { apolloAdapter } from "./apolloAdapter";

export const useVersionedQuery = createVersionedQuery(apolloAdapter);
