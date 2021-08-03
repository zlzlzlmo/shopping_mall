import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getProductsSelector,
  selectAllProducts,
  selectProductById,
  selectProductEnitities,
  selectTotalProducts,
  selectProductIds,
} from "./products.slice";
import { useAppDispatch, useAppSelect } from "../store.hooks";
import { removeProduct, Product } from "./products.slice";
import { addToCart } from "../Cart/cart.slice";
import { RootState } from "../store";
const ProductsList: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const etf = useSelector<RootState>((state) =>
    selectProductById(state, "etf")
  );
  const totalNumberOfProducts = useSelector(selectTotalProducts);
  const productids = useSelector(selectProductIds);
  const entities = useSelector(selectProductEnitities);

  const dispatch = useAppDispatch();
  const removeFromStore = (id: string) => {
    dispatch(removeProduct(id));
  };
  const addToCartHandler = (product: Product) => dispatch(addToCart(product));
  return (
    <div>
      <h2>Games List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => addToCartHandler(product)}>
            장바구니 추가
          </button>
          <button onClick={() => removeFromStore(product.id)}>삭제</button>
        </div>
      ))}
      {/* <button
        onClick={() =>
          setProducts((prev) => {
            return [{ title: "추가상품", price: 10000, id: "test4" }, ...prev];
          })
        }
      >
        상품 추가
      </button> */}
    </div>
  );
};

export default ProductsList;
