import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import {
  addProduct,
  Product,
  addProductAsync,
  getErrorMessage,
} from "./products.slice";
const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector(getErrorMessage);
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProduct({ ...product, [e.target.name]: e.target.value });
  // setProduct((prev) => {
  //   (prev as any)[e.target.name] = e.target.value;
  //   const newValue = { ...prev };
  //   return newValue;
  // });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
    if (errorMessage) {
      alert(errorMessage);
    }
  };
  return (
    <>
      <h2>Add Game To The Score</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game title"
          name="title"
          value={product.title}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="id"
          name="id"
          value={product.id}
          onChange={handleChange}
        ></input>
        <button type="submit">Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
