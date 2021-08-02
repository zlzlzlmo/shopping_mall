import React from "react";

interface ProductFormProps {}
const ProductForm: React.FC<ProductFormProps> = () => {
  return (
    <>
      <h2>Add Game To The Score</h2>
      <form>
        <input type="text" placeholder="Game title" name="title"></input>
        <input type="number" placeholder="Price" name="price"></input>
        <input type="text" placeholder="id" name="id"></input>
        <button>Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
