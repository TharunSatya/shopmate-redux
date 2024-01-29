import React from "react";
import "./CardCart.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
export const CardCart = (props) => {
  const dispatch = useDispatch();
  const { productList } = props;
  const { name, price, image } = productList;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button className="remove" onClick={()=>dispatch(remove(productList))}>Remove</button>
    </div>
  );
};
