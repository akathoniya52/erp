import { createSlice } from "@reduxjs/toolkit";
import orderData from "@/app/components/orderData";
import { deleteItem } from "./Functions";

const orderSlice = createSlice({
  name: "orderData",
  initialState: {
    orderData,
  },
  reducers: {
    deleteOrder: (state, action) => {
      state.orderData = deleteItem(state.orderData, action.payload);
    },
    updateStatus: (state, action) => {
      let data = state.orderData.map((order) => {
        if (order.id === action.payload) {
          return { ...order, status: "Completed" };
        } else {
          return order;
        }
      });
      state.orderData = data;
    },
  },
});

export const { deleteOrder, updateStatus } = orderSlice.actions;
export default orderSlice.reducer;
