import React from "react";
import { useAppSelect, useAppDispatch } from "../store.hooks";
import { getCartProducts, getTotalPrice, removeFromCart } from "./cart.slice";
const Cart: React.FC = () => {
  const cartProducts = useAppSelect(getCartProducts);
  const totalPrice = useAppSelect(getTotalPrice);
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = (productId: string) =>
    dispatch(removeFromCart(productId));
  return (
    <>
      <h2>Cart</h2>
      <h5>{totalPrice}</h5>
      {cartProducts.map((product) => {
        return (
          <div key={product.id}>
            <span>{product.title}</span>
            <span>{product.amount}</span>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              장바구니 제거
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
