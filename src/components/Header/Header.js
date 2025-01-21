import "./Header.css";
import Cart from "../Cart/Cart";

export default function Header({ cartItems, setCartItems }) {
  return (
    <header>
      <div className="logo">
        <div>Shop</div>
        <div className="logo-box">Lift</div>
      </div>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <button className="login-button">Log In</button>
    </header>
  );
}
