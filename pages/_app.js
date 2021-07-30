import { useState } from 'react';
import productData from '../data.json';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {

  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("aa");

  function handleSelectedProduct(id) {
    const products = [...productData];
    const product = products.find(product => product.id === id);
    setSelectedProduct(product);
  }

  function handleSelectedCategory(category) {
    const products = [...productData];
    const selected = products.filter(product => product.category === category);
    setSelectedCategory(selected);
  }

  return (
    <Component
      {...pageProps}
      selectedProduct={selectedProduct}
      selectedCategory={selectedCategory}
      onProductSelect={handleSelectedProduct}
      onCategorySelect={handleSelectedCategory}
    />
  )
}

export default MyApp
