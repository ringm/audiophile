import productData from '../data.json';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const products = productData;
  return <Component {...pageProps} products={products} />
}

export default MyApp
