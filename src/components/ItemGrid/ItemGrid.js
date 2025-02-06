import ItemCard from "../ItemCard/ItemCard";
import "./ItemGrid.css";

export default function ItemGrid({
  filteredData,
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
}) {
  return (
    <div className="item-grid">
      {filteredData.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
          favouriteItems={favouriteItems}
          setFavouriteItems={setFavouriteItems}
        />
      ))}
    </div>
  );
}
