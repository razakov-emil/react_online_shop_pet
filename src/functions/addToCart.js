export default function addToCart(item, setCartItems) {
  setCartItems((prevCartItems) => {
    const itemIndex = prevCartItems.findIndex((obj) => obj.id === item.id);
    if (itemIndex === -1) {
      return [
        ...prevCartItems,
        {
          id: item.id,
          source: item.images,
          itemName: item.title,
          itemCost: item.price,
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
