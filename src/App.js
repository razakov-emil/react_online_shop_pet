import { useState } from "react";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Catalog from "./pages/Catalog/Catalog";
import MobileNav from "./components/MobileNav/MobileNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [user, setUser] = useState({});
  return (
    <>
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          favouriteItems={favouriteItems}
          setFavouriteItems={setFavouriteItems}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route
            path="/catalog"
            element={
              <Catalog
                cartItems={cartItems}
                setCartItems={setCartItems}
                favouriteItems={favouriteItems}
                setFavouriteItems={setFavouriteItems}
              />
            }
          />
        </Routes>
        <MobileNav
          cartItems={cartItems}
          favouriteItems={favouriteItems}
          user={user}
          setUser={setUser}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
