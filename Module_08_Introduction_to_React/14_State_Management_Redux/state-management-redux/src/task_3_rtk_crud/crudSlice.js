import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addItem, deleteItem, updateItem } = crudSlice.actions;
export default crudSlice.reducer;
