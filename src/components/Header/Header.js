import "./Header.css";

export default function Header({ cartItems }) {
  return (
    <header>
      <div className="logo">
        <div>Shop</div>
        <div className="logo-box">Lift</div>
      </div>
      <div className="cart">Cart has {cartItems.length} items</div>
      <button className="login-button">Log In</button>
    </header>
  );
}
