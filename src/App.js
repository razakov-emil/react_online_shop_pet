import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { addToCart } from "./functions/addToCart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} />
      <Main addToCart={() => addToCart(setCartItems)} />
    </>
  );
}

export default App;
