import React, { useState } from "react";
import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
export const ProductCard = (props) => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const [cartStatusOfItem, setCartStatusOfItem] = useState(false);
  const { productsList } = props;
  const { name, price, image, id } = productsList;
  const dispatch = useDispatch();

  useEffect(() => {
    const status = cartList.find(
      (eachProduct) => eachProduct.id ===id
    );
    if (status) {
      setCartStatusOfItem(true);
    } else {
      setCartStatusOfItem(false);
    }
  }, [cartList, id]);

  const handleClick = () => {
    console.log(cartList.map((eachItem) => console.log("herror")));

    dispatch(add(productsList));
  };

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {cartStatusOfItem ? (
          <button
            onClick={() => dispatch(remove(productsList))}
            className="remove"
          >
            Remove
          </button>
        ) : (
          <button onClick={handleClick}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
