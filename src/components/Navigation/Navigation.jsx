import React,{useContext} from "react";
import { Link } from "react-router-dom";
import shoping from "../../Assets/shopping-cart.svg";
import { CartContext } from "../context/ContextProvider";
import "./style.css";

const Navigation = () => {
  const {cart} = useContext(CartContext);
  return (
    <div className="nav__container">
      <div className="nav__sub__container">
        <Link to="/">
          <p className="logo">Shopping Web App</p>
        </Link>
        <div className="search__container">
          <input className="search__input" placeholder="search here" />
          <button className="serach_btn">Search</button>
        </div>
        <Link to="/my-cart">
          <img className="cart__container" src={shoping} alt="shopping_cart" />{cart.length}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
