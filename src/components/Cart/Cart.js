import "./Cart.css";
import { useState } from "react";
import CartItem from "../CartItem/CartItem";

export default function Cart({ cartItems }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className="cart"
        onMouseEnter={() => {
          if (cartItems.length > 0) setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
      >
        <div>Cart</div>
        {cartItems.length > 0 ? (
          <div className="cart-volume">{cartItems.length}</div>
        ) : (
          ""
        )}

        <div className={hovered ? "cart-modal" : "cart-modal hidden"}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
