export default function addToCart(item, setFavouriteItems) {
  setFavouriteItems((prevFavouriteItems) => {
    const itemIndex = prevFavouriteItems.findIndex((obj) => obj.id === item.id);
    if (itemIndex === -1) {
      return [
        ...prevFavouriteItems,
        {
          id: item.id,
          source: item.images,
          itemName: item.title,
          itemCost: item.price,
          quantity: 1,
        },
      ];
    } else {
      return prevFavouriteItems.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  });
}
