export const addToCart = (setCartItems, item) => {
  setCartItems((prevCart) => [...prevCart, item]);
};
