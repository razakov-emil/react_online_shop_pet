import ItemCard from "../ItemCard/ItemCard";
import "./ItemGrid.css";

export default function ItemGrid({ data, setCartItems }) {
  return (
    <div className="item-grid">
      {data.map((item) => (
        <ItemCard key={item.id} item={item} setCartItems={setCartItems} />
      ))}
    </div>
  );
}
