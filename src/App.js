import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  return (
    <>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        favouriteItems={favouriteItems}
        setFavouriteItems={setFavouriteItems}
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
