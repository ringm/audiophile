import productData from '../data.json';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const products = productData;
  return <Component {...pageProps} products={products} />
}

export default MyApp
