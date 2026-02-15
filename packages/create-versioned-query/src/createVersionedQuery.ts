import { resolve } from "./utils";
import type { UseVersionedQueryConfig, QueryAdapter } from "./types";

export const createVersionedQuery = <TParams, TResult>(
  adapter: QueryAdapter<TParams, TResult>,
) => {
  return ({
    versions,
    currentVersion,
    isEnabled: isEnabledByConsumer = true,
  }: UseVersionedQueryConfig<TParams>): TResult => {
    const currentVersionId = currentVersion();
    const currentVersionConfig = versions.get(currentVersionId);

    if (!currentVersionConfig) {
      throw new Error(`No config found for version: "${currentVersionId}."}`);
    }

    const isGloballyEnabled: boolean = resolve(isEnabledByConsumer);
    const isCurrentVersionEnabled: boolean = resolve(
      currentVersionConfig.isEnabled ?? true,
    );
    const isHookEnabled: boolean = isGloballyEnabled && isCurrentVersionEnabled;

    return adapter(currentVersionConfig.params, {
      skip: !isHookEnabled,
    });
  };
};
