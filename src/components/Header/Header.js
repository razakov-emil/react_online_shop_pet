import "./Header.css";
import Cart from "../Cart/Cart";

export default function Header({ cartItems }) {
  return (
    <header>
      <div className="logo">
        <div>Shop</div>
        <div className="logo-box">Lift</div>
      </div>
      <Cart cartItems={cartItems} />
      <button className="login-button">Log In</button>
    </header>
  );
}
