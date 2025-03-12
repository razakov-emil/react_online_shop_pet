import "./MobileNav.css";
import LogIn from "../LogIn/LogIn";
import Favourite from "../Favourite/Favourite";
import Cart from "../Cart/Cart";

export default function MobileNav({
  favouriteItems,
  cartItems,
  user,
  setUser,
}) {
  return (
    <section className="mobile-navigation">
      <Favourite favouriteItems={favouriteItems} />
      <Cart cartItems={cartItems} />
      {Object.keys(user).length === 0 ? (
        <LogIn setUser={setUser} />
      ) : (
        <img className="miniprofile-img" src={user.image} alt={user.username} />
      )}
    </section>
  );
}
