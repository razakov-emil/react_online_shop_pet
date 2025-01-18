import "./ItemCard.css";
import { useState } from "react";
import { handleError } from "../../functions/handleError";

export default function ItemCard({
  key,
  source,
  itemName,
  itemCost,
  addToCart,
}) {
  const [currentSrc, setCurrentSrc] = useState(source);
  const [retried, setRetried] = useState(false);

  return (
    <div className="item-card">
      <img
        className="item-card__image"
        onError={() =>
          handleError(currentSrc, setCurrentSrc, retried, setRetried)
        }
        src={currentSrc}
        alt={itemName}
      />
      <div className="item-card__name">{itemName}</div>
      <div className="item-card__cost">{itemCost + "₡"}</div>
      <button
        className="item-card__button"
        onClick={() => {
          addToCart({ key, source, itemName, itemCost });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
