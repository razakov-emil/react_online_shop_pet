import "./Header.css";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Favourite from "../Favourite/Favourite";
import LogIn from "../LogIn/LogIn";
import UserMiniProfile from "../UserMiniProfile/UserMiniProfile";

export default function Header({
  cartItems,
  setCartItems,
  favouriteItems,
  setFavouriteItems,
  user,
  setUser,
}) {
  useEffect(() => {
    if (!!localStorage.getItem("accessToken") === true) {
      const tokenSend = async () => {
        try {
          const response = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          if (!response.ok) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            throw new Error("Ошибка авторизации");
          }
          const json = await response.json();
          console.log(json);
          setUser(json);
        } catch (error) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          console.error("Ошибка при авторизации", error);
        }
      };
      tokenSend();
    }
  }, []);
  return (
    <header>
      <div className="logo">
        <div>Shop</div>
        <div className="logo-box">Lift</div>
      </div>
      <section className="header-interact">
        <Favourite
          favouriteItems={favouriteItems}
          setFavouriteItems={setFavouriteItems}
          setCartItems={setCartItems}
        />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        {Object.keys(user).length === 0 ? (
          <LogIn setUser={setUser} />
        ) : (
          <UserMiniProfile user={user} setUser={setUser} />
        )}
      </section>
    </header>
  );
}
