import { useState } from "react";
import "../../styles/modalProduct.css";
import { handleError } from "../../functions/handleError";
import deleteFromModal from "../../functions/deleteFromModal";

export default function FavouriteProduct({ item, setModalItems }) {
  const [currentSrc, setCurrentSrc] = useState(item.source);
  const [retried, setRetried] = useState(false);
  return (
    <div className="cart-product" key={item.id}>
      <img
        className="product-image"
        src={currentSrc}
        alt={item.itemName}
        onError={() =>
          handleError(currentSrc, setCurrentSrc, retried, setRetried)
        }
      />
      <div className="product-name">{item.itemName}</div>
      <div className="product-cost">{item.itemCost + "₵"}</div>
      <button
        className="product-delete"
        index={item.index}
        onClick={() => deleteFromModal(item.id, setModalItems)}
      >
        Delete
      </button>
    </div>
  );
}
