import React from "react";
import { CardCart } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useSelector } from "react-redux/es/hooks/useSelector";
export const Cart = () => {
  useTitle("Cart");
  const products = useSelector((state) => state.cartState.cartList);
  const cartTotal = useSelector((state) => state.cartState.total);
  return (
    <main>
      <section className="cart">
        <h1 className="cart-count-heading">
          Cart Items:{products.length}/{cartTotal}
        </h1>
        <ul>
          {products.map((eachItem) => (
            <CardCart key={eachItem.id} productList={eachItem} />
          ))}
        </ul>
      </section>
    </main>
  );
};
