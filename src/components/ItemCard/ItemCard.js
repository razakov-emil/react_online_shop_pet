import "./ItemCard.css";
import { useState } from "react";
import { handleError } from "../../functions/handleError";
import addToCart from "../../functions/addToCart";
import addToFavourite from "../../functions/addToFavourite";

export default function ItemCard({ item, setCartItems, setFavouriteItems }) {
  const [currentSrc, setCurrentSrc] = useState(item.images);
  const [retried, setRetried] = useState(false);

  return (
    <div className="item-card">
      <div className="item-card__rating">
        {item.rating > 0 ? "★ " + item.rating : "☆ "}
      </div>
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
        className="item-card__favourite"
        onClick={() => addToFavourite(item, setFavouriteItems)}
      >
        ❤
      </button>
      <button
        className="item-card__purchase"
        onClick={() => addToCart(item, setCartItems)}
      >
        Add to cart
      </button>
    </div>
  );
}
