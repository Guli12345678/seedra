import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    fake: () => "lorem",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
