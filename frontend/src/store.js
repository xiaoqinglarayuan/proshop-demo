import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: {},
  reducers: {},
});

const store = configureStore({
  reducer: {
    placeholder: placeholderSlice.reducer,
  },
});

export default store;
