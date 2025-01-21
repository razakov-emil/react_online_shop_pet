export default function deleteFromCart(id, setCartItems) {
  setCartItems((prevCartItems) => {
    return prevCartItems.filter((obj) => obj.id !== id);
  });
}
