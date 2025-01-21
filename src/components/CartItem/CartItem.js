import { useState } from "react";
import "./CartItem.css";
import { handleError } from "../../functions/handleError";
import deleteFromCart from "../../functions/deleteFromCart";

export default function CartItem({ item, setCartItems }) {
  const [currentSrc, setCurrentSrc] = useState(item.source);
  const [retried, setRetried] = useState(false);
  return (
    <div className="cart-item" key={item.id}>
      <img
        className="item-image"
        src={currentSrc}
        alt={item.itemName}
        onError={() =>
          handleError(currentSrc, setCurrentSrc, retried, setRetried)
        }
      />
      <div className="item-name">{item.itemName}</div>
      <div className="item-cost">{item.itemCost + "₵"}</div>
      <button
        className="item-delete"
        index={item.index}
        onClick={() => deleteFromCart(item.id, setCartItems)}
      >
        Delete
      </button>
      <div className="item-quantity">{item.quantity + " шт."}</div>
    </div>
  );
}
