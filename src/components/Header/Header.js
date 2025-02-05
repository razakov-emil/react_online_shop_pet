import "./Header.css";
import Cart from "../Cart/Cart";
import Favourite from "../Favourite/Favourite";

export default function Header({
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
}) {
  return (
    <header>
      <div className="logo">
        <div>Shop</div>
        <div className="logo-box">Lift</div>
      </div>
      <Favourite
        favouriteItems={favouriteItems}
        setFavouriteItems={setFavouriteItems}
        setCartItems={setCartItems}
      />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <button className="login-button">Log In</button>
    </header>
  );
}
