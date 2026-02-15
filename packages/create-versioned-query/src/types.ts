export type VersionConfig<TParams> = {
  params: TParams;
  isEnabled?: boolean | (() => boolean);
};

export type UseVersionedQueryConfig<TParams> = {
  versions: Map<string, VersionConfig<TParams>>;
  currentVersion: () => string;
  isEnabled?: boolean | (() => boolean);
};

export type QueryAdapter<TParams, TResult> = (
  params: TParams,
  options: { skip: boolean },
) => TResult;
