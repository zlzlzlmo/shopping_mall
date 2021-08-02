import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";
interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = () => {
  const products = useSelector(getProductsSelector);
  return (
    <div>
      <h2>Games List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
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
