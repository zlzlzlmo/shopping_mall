import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { RootState } from "../store";

export interface Product {
  title: string;
  price: number;
  id: string;
}

export enum ValidationState {
  FulFilled,
  Pending,
  Rejected,
}
interface ProductSliceState {
  products: Product[];
  validationState?: ValidationState;
  errorMessage?: string;
}
export const addProductAsync = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);

const initialProducts: Product[] = [
  { title: "초기 상품", price: 10000, id: "test" },
  { title: "초기 상품1", price: 20000, id: "test1" },
  { title: "초기 상품2", price: 30000, id: "test2" },
];

const initialState: ProductSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [...state, action.payload];
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.FulFilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }));
  },
});
export const { addProduct, removeProduct } = productsSlice.actions;

//useSelector할때 사용해서 상태값 불러옴
export const getProductsSelector = (state: RootState) =>
  state.products.products;
export default productsSlice.reducer;
