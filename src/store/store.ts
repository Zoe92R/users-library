import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../users/usersSlice";

export interface RootState {
  users: { data: any[]; isLoading: boolean; isSuccess: boolean }; // TODO: ADD TYPE
}
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
