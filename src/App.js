import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} />
      <Main setCartItems={setCartItems} />
    </>
  );
}

export default App;
