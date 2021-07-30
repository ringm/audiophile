import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import Head from "next/head";
import NavBar from "@/root/components/NavBar";
import { ProductHeader, ProductFeatures, ProductContents, ProductGallery } from '@/root/components/Product';
import { RelatedProducts } from "@/root/components/RelatedProducts";
import { ProductCategories } from '@/root/components/ProductCategories';
import About from "@/root/components/About";
import { Footer } from '@/root/components/Footer';

export default function Product({ selectedProduct, onProductSelect, onCategorySelect }) {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe}>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar bgColor="black" />
      <div className="flexy-col-center">
        <div className="container">
          <ProductHeader product={selectedProduct} />
          <div className="mb-16 lg:flexy-row-center">
            <ProductFeatures product={selectedProduct} />
            <ProductContents product={selectedProduct} />
          </div>
          <ProductGallery product={selectedProduct} />
          <RelatedProducts product={selectedProduct} onProductSelect={onProductSelect} />
          {device !== 'mobile' && <ProductCategories styles={`mb-24`} onCategorySelect={onCategorySelect} />}
          <About />
        </div>
      </div>
      <Footer />
    </div>
  )
}