import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  isCreateProductModal: false,
};

const createProductModalSlice = createSlice({
  name: "createProductModal",
  initialState,
  reducers: {
    setCreateProductModalShow: (state, action) => {
      state.isCreateProductModal = action.payload;
    },
  },
});

export const { setCreateProductModalShow } = createProductModalSlice.actions;
export default createProductModalSlice.reducer;
