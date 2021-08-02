import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "초기 상품", price: 10000, id: "test" },
  { title: "초기 상품1", price: 20000, id: "test1" },
  { title: "초기 상품2", price: 30000, id: "test2" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});
export const { addProduct } = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
