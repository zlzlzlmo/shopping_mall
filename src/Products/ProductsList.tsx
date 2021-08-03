import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";
import { useAppDispatch, useAppSelect } from "../store.hooks";
import { removeProduct, Product } from "./products.slice";
import { addToCart } from "../Cart/cart.slice";
const ProductsList: React.FC = () => {
  const products = useAppSelect(getProductsSelector);
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
