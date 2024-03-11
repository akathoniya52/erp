import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "@/app/components/data";
import {deleteItem, updateItem} from './Functions'

const dataSlice = createSlice({
  name: "data",
  initialState: { ProductsData },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.ProductsData = [...state.ProductsData, action.payload];
    },
    deleteProduct: (state, action) => {
      state.ProductsData = deleteItem(state.ProductsData, action.payload);
    },
    editAndUpdate: (state, action) => {
      state.ProductsData = updateItem(state.ProductsData,action.payload);
    }
  },
});

export const { addProduct, deleteProduct, editAndUpdate } = dataSlice.actions;
export default dataSlice.reducer;
