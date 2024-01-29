import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Header.css";
export const Header = () => {
  const productsList = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="shopmate logo" className="" />
        <span>Shopping Cart </span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart :{productsList.length}</span>
      </Link>
    </header>
  );
};
