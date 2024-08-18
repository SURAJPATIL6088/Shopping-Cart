import React, { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "../context/CartReducer";
import "./style.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartList__container">
      {cart.length > 0 ? (
        <div className="cart__products">
          <div className="product__details">
            {cart.map((product) => {
              return <CartProduct key={product.id} product={product} />;
            })}
          </div>

          <div className="product__price_details">
            <div>
              <h5>Total Items: {totalItem(cart)}</h5>
              <h5>Total Price: ${totalPrice(cart)}</h5>
              <button className="checkout__btn">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="txt__msg"><p>First add the product in cart</p></div>
      )}
    </div>
  );
};

export default Cart;
