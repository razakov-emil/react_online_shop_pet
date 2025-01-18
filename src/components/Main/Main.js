import ItemGrid from "../ItemGrid/ItemGrid";

export default function Main({ addToCart }) {
  return (
    <div className="main">
      <ItemGrid addToCart={addToCart} />
    </div>
  );
}
