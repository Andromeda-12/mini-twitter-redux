declare type RootState = ReturnType<typeof import("../store").appStore.getState>;
declare type RootDispatch = typeof import("../store").appStore.dispatch;