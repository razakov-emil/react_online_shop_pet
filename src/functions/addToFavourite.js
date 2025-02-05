export default function addToCart(item, setFavouriteItems) {
  setFavouriteItems((prevFavouriteItems) => {
    const itemIndex = prevFavouriteItems.findIndex((obj) => obj.id === item.id);
    if (itemIndex === -1) {
      return [...prevFavouriteItems, item];
    } else {
      return prevFavouriteItems;
    }
  });
}
