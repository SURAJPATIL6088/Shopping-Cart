import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";
import "./style.css";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product__container">
      <img src={product.thumbnail} className="product-img-top" alt="..." />
      <div className="product__body">
        <h4 className="product__title">{product.title}</h4>
        <div className="product__price">
            <h5 className="product__discount_price">${product.discountedPrice}</h5>
            <h5 className="product__real__price">${product.price}</h5>
            <h5 className="product__discount_percentage">{product.discountPercentage}%</h5>            
        </div>

        <button
          className="btn_product__cart"
          onClick={() => dispatch({ type: "Add", product: product })}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
