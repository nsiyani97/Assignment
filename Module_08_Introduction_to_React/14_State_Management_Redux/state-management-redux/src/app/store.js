import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../task_3_rtk_crud/crudSlice";
import { counterReducer } from "../task_1_redux_counter/counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer,
  },
});
