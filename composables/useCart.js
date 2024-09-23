export const useCart = () => {
  // Create state variables using useState
  // cart state
  const cart = useState('cart', () => []); // Initialize cart as an empty array

  const addToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id);

    if (existingProduct) {
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
        
        existingProduct.quantity -= 1;

      } else {
        cart.value = cart.value.filter(item => item.id !== productId);
      }
    }
  };

  const totalPrice = computed(() => {
  const total = cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
  // toFixed() gør at kun et fikst antal vises efter komma
  return total.toFixed(2); 
  });

 const totalCartItems = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0);
  });


  return {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
    totalCartItems,
  };
};