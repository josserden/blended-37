import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = { products: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log(action);
      state.products.push({
        id: uuid(),
        dessert: action.payload.dessert,
        calories: action.payload.calories,
        fat: action.payload.fat,
        carbs: action.payload.carbs,
        protein: action.payload.protein,
      });
    },
    deleteProduct(state, { payload }) {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addProduct, deleteProduct, incrementByAmount } =
  productsSlice.actions;
export default productsSlice.reducer;
