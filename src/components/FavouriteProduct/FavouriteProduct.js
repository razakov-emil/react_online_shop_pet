import { useState } from "react";
import "../../styles/modalProduct.css";
import { handleError } from "../../functions/handleError";
import deleteFromModal from "../../functions/deleteFromModal";
import addToCart from "../../functions/addToCart";

export default function FavouriteProduct({
  item,
  setModalItems,
  setCartItems,
}) {
  const [currentSrc, setCurrentSrc] = useState(item.images);
  const [retried, setRetried] = useState(false);
  return (
    <div className="favourite-product" key={item.id}>
      <img
        className="product-image"
        src={currentSrc}
        alt={item.title}
        onError={() =>
          handleError(currentSrc, setCurrentSrc, retried, setRetried)
        }
      />
      <div className="product-name">{item.title}</div>
      <div className="product-cost">{item.price + "₵"}</div>
      <button
        className="product-delete"
        index={item.index}
        onClick={() => deleteFromModal(item.id, setModalItems)}
      >
        Delete
      </button>
      <button
        className="product__purchase"
        onClick={() => addToCart(item, setCartItems)}
      >
        Add to cart
      </button>
    </div>
  );
}
