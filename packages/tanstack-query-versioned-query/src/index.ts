import { createVersionedQuery } from "@vipulgujare/create-versioned-query";
import { tanstackAdapter } from "./tanstackAdapter";

export const useVersionedQuery = createVersionedQuery(tanstackAdapter);
