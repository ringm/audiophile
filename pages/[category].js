import useDimensions from "react-cool-dimensions";
import { getDevice } from "@/root/utils/helpers";
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from "@/root/components/NavBar";
import { SubNav } from "@/root/components/SubNav";
import { Product } from '@/root/components/Product';
import { ProductCategories } from "@/root/components/ProductCategories";
import About from "@/root/components/About";
import { Footer } from "@/root/components/Footer";

export default function Category({ selectedCategory, onProductSelect, onCategorySelect }) {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar bgColor='black' />
      <SubNav
        ref={observe}
        title={router.query.category}
      />
      {selectedCategory.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            img={product.image[device]}
            onProductSelect={onProductSelect}
          />
        )
      })}
      <ProductCategories styles={`mb-24`} onCategorySelect={onCategorySelect} />
      <About />
      <Footer />
    </>
  )
}