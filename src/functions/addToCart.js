export default function addToCart(item, setCartItems) {
  setCartItems((prevCartItems) => {
    console.log(item);
    const itemIndex = prevCartItems.findIndex((obj) => obj.id === item.id);
    if (itemIndex === -1) {
      return [
        ...prevCartItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    } else {
      return prevCartItems.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  });
}
