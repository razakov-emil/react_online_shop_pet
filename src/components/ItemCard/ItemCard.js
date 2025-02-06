import "./ItemCard.css";
import { useState } from "react";
import { handleError } from "../../functions/handleError";
import addToCart from "../../functions/addToCart";
import addToFavourite from "../../functions/addToFavourite";

export default function ItemCard({
  item,
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
}) {
  const [currentSrc, setCurrentSrc] = useState(item.images);
  const [retried, setRetried] = useState(false);
  const isInCart = cartItems.some((cartItem) => item.id === cartItem.id);
  const isInFavourite = favouriteItems.some(
    (favouriteItem) => item.id === favouriteItem.id
  );

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
        className={
          "item-card__favourite" + (isInFavourite ? " favourite__picked" : "")
        }
        onClick={() => addToFavourite(item, setFavouriteItems)}
      >
        ❤
      </button>
      <button
        className={"item-card__purchase" + (isInCart ? " cart__picked" : "")}
        onClick={() => addToCart(item, setCartItems)}
      >
        {isInCart > 0 ? "In cart" : "Add to cart"}
      </button>
    </div>
  );
}
