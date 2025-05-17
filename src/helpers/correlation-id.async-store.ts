import { AsyncLocalStorage } from "node:async_hooks";
import { v4 as uuidV4 } from "uuid";

type AsyncLocalStorageType = {
  correlationId: string;
};

const asyncLocalStore = new AsyncLocalStorage<AsyncLocalStorageType>();

export const setCorrelationId = (cb: () => any) => {
  asyncLocalStore.run({ correlationId: uuidV4() }, cb);
};

export const getCorrelationId = () => {
  const asyncStore = asyncLocalStore.getStore();
  return (
    asyncStore?.correlationId ?? "unknown-error-while-creating-correlation-id"
  );
};
