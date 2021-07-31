import { useState } from 'react';
import productData from '../data.json';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {

  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleCartVisibility(visibility) {
    setCartVisibility(visibility);
  }

  function handleAddToCart(id) {
    const item = productData.find(product => product.id === id);
    const cartItem = {
      id: item.id,
      name: item.name,
      img: item.image.cart,
      price: item.price,
      qty: 1
    };
    setCartItems([...cartItems, cartItem]);
  }

  return (
    <Component
      {...pageProps}
      cartVisibility={cartVisibility}
      onCartVisibility={handleCartVisibility}
      cartItems={cartItems}
      onAddToCart={handleAddToCart}
    />
  )
}

export default MyApp
