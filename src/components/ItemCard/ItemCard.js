import "./ItemCard.css";
import { useState } from "react";
import { handleError } from "../../functions/handleError";
import addToCart from "../../functions/addToCart";

export default function ItemCard({ item, setCartItems }) {
  const [currentSrc, setCurrentSrc] = useState(item.images);
  const [retried, setRetried] = useState(false);

  return (
    <div className="item-card">
      <img
        className="item-card__image"
        onError={() =>
          handleError(currentSrc, setCurrentSrc, retried, setRetried)
        }
        src={currentSrc}
        alt={item.title}
      />
      <div className="item-card__name">{item.title}</div>
      <div className="item-card__cost">{item.price + "₡"}</div>
      <button
        className="item-card__button"
        onClick={() => addToCart(item, setCartItems)}
      >
        Add to cart
      </button>
    </div>
  );
}
