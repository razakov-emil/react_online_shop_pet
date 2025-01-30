import ItemCard from "../ItemCard/ItemCard";
import "./ItemGrid.css";

export default function ItemGrid({ filteredData, setCartItems }) {
  return (
    <div className="item-grid">
      {filteredData.map((item) => (
        <ItemCard key={item.id} item={item} setCartItems={setCartItems} />
      ))}
    </div>
  );
}
