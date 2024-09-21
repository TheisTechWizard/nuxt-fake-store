export const useCart = () => {
  // Create state variables using useState
  // cart state
  const cart = useState('cart', () => []); // Initialize cart as an empty array

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id);

    if (existingProduct) {
      // If product exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity = 1
      cart.value.push({ ...product, quantity: 1 });
    }

    console.log(cart.value);
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.value.find(item => item.id === productId);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // If more than one, decrease the quantity
        existingProduct.quantity -= 1;
      } else {
        // If only one left, remove the product from the cart
        cart.value = cart.value.filter(item => item.id !== productId);
      }
    }

    console.log(cart.value);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};