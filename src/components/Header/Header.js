import "./Header.css";
import Cart from "../Cart/Cart";
import Favourite from "../Favourite/Favourite";
import LogIn from "../LogIn/LogIn";

export default function Header({
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
  user,
  setUser,
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
      <LogIn user={user} setUser={setUser} />
    </header>
  );
}
