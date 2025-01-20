import ItemGrid from "../ItemGrid/ItemGrid";

export default function Main({ setCartItems }) {
  return (
    <div className="main">
      <ItemGrid setCartItems={setCartItems} />
    </div>
  );
}
