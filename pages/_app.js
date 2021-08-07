import { useState, useEffect } from 'react';
import useDimensions from "react-cool-dimensions";
import { getDevice } from "@/root/utils/helpers";
import productData from '../data.json';
import { DefaultLayout } from '@/root/components/layout';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {

  const { observe, width, unobserve } = useDimensions({
    onResize: ({ observe, width, unobserve }) => {
      // Triggered whenever the size of the target is changed...
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const LOCAL_STORAGE_CART = "cartItems";
  const device = getDevice(width);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const NestedLayout = Component.Layout || EmptyLayout;

  function handleCartVisibility(visibility) {
    setCartVisibility(visibility);
  }

  function handleAddToCart(id, qty) {

    const currentCart = [...cartItems];
    const idx = currentCart.findIndex(item => item.id === id);

    if (idx !== -1) {

      currentCart[idx].qty += qty;
      setCartItems(currentCart);

    } else {

      const newItem = productData.find(product => product.id === id);
      const newCartItem = {
        id: newItem.id,
        name: newItem.name,
        img: newItem.image.cart,
        price: newItem.price,
        qty: qty
      };
      setCartItems([...currentCart, newCartItem]);
    }
  }

  function handleCartChange(id, qty) {

    const currentCart = [...cartItems];
    const idx = currentCart.findIndex(item => item.id === id);

    if (qty < 1) {
      currentCart.splice(idx, 1);
      return setCartItems(currentCart);
    };

    currentCart[idx].qty = qty;
    setCartItems(currentCart);

  }

  function handleCartDelete() {
    setCartItems([]);
  }

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CART)
    )
    if(storedCart) setCartItems(storedCart)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cartItems))
  }, [cartItems])

  return (

    <div ref={observe}>
      <DefaultLayout
        cartVisibility={cartVisibility}
        onCartVisibility={handleCartVisibility}
        cartItems={cartItems}
        onCartChange={handleCartChange}
        onCartDelete={handleCartDelete}
        device={device}
      >
        <NestedLayout device={device}>
          <Component {...pageProps} device={device} onAddToCart={handleAddToCart} cartItems={cartItems} onCartDelete={handleCartDelete} />
        </NestedLayout>
      </DefaultLayout>
    </div>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp
