import "./ItemCard.css";
import { useState } from "react";
import { handleError } from "../../functions/handleError";

export default function ItemCard({
  id,
  source,
  itemName,
  itemCost,
  setCartItems,
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
          setCartItems((prevCartItems) => {
            const itemIndex = prevCartItems.findIndex((obj) => obj.id === id);
            console.log(itemIndex);
            if (itemIndex === -1) {
              return [
                ...prevCartItems,
                { id, source, itemName, itemCost, quantity: 1 },
              ];
            } else {
              return prevCartItems.map((item, index) =>
                index === itemIndex
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            }
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
