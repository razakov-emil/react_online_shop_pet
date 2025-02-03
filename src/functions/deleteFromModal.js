export default function deleteFromCart(id, setModalItems) {
  setModalItems((prevCartItems) => {
    return prevCartItems.filter((obj) => obj.id !== id);
  });
}
