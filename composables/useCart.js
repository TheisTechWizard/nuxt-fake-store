export const useCart = () => {
  // Create a global cart state using useState
  const cart = useState('cart', () => []); // Initialize cart as an empty array

  // Function to add a product to the cart
  const addToCart = (product) => {
    cart.value.push(product); // Add product to the cart
    //console.log(cart.value)
  };

  // Optionally, a function to remove a product from the cart
  const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};