import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [user, setUser] = useState({});
  return (
    <>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        favouriteItems={favouriteItems}
        setFavouriteItems={setFavouriteItems}
        user={user}
        setUser={setUser}
      />
      <Main
        cartItems={cartItems}
        setCartItems={setCartItems}
        favouriteItems={favouriteItems}
        setFavouriteItems={setFavouriteItems}
      />
    </>
  );
}

export default App;
