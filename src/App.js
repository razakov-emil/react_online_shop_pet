import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Main setCartItems={setCartItems} />
    </>
  );
}

export default App;
