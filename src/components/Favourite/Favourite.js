import "./Favourite.css";
import { useState } from "react";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";

export default function Favourite({ favouriteItems, setFavouriteItems }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="favourite"
        onMouseEnter={() => {
          if (favouriteItems.length > 0) setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
      >
        <div>Favourite</div>
        {favouriteItems.length > 0 ? (
          <div className="favourite-volume">{favouriteItems.length}</div>
        ) : (
          ""
        )}

        <div className={hovered ? "favourite-modal" : "favourite-modal hidden"}>
          {favouriteItems.map((item) => {
            return (
              <FavouriteProduct
                key={item.id}
                item={item}
                setModalItems={setFavouriteItems}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
