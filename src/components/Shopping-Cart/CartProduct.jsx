import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import './style.css';


const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);

    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);

    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  return (
    <div className="cart__products__container">
      <img src={product.thumbnail} alt="..." />
      <div className="product_cart_detail">
        <h4>{product.title}</h4>
        <h5>${product.discountedPrice}</h5>
        <div className="btn__quantity__container">
          <button className="btn__quantity" onClick={() => Decrease(product.id)}>-</button>
          <button>{product.quantity}</button>
          <button className="btn__quantity" onClick={() => Increase(product.id)}>+</button>
        </div>

        <button className="btn__remove__product" onClick={() => dispatch({ type: "Remove", id: product.id })}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
