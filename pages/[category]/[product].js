import productData from '../../data.json';
import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import Head from "next/head";
import NavBar from "@/root/components/NavBar";
import { ProductHeader, ProductFeatures, ProductContents, ProductGallery } from '@/root/components/Product';
import { RelatedProducts } from "@/root/components/RelatedProducts";
import { ProductCategories } from '@/root/components/ProductCategories';
import About from "@/root/components/About";
import { Footer } from '@/root/components/Footer';

export async function getStaticPaths() {
  const paths = productData.map(product => ({
    params: { category: product.category, product: product.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = productData.find(product => product.slug === params.product);
  return {
    props: {
      product,
    },
  }
}

export default function Product({ product, onAddToCart, onCartVisibility, cartVisibility, cartItems }) {

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
      <NavBar cartVisibility={cartVisibility} onCartVisibility={onCartVisibility} cartItems={cartItems} />
      <div className="flexy-col-center">
        <div className="container">
          <ProductHeader product={product} onAddToCart={onAddToCart} />
          <div className="mb-16 lg:flexy-row-center">
            <ProductFeatures product={product} />
            <ProductContents product={product} />
          </div>
          <ProductGallery product={product} />
          <RelatedProducts product={product} />
          {device !== 'mobile' && <ProductCategories styles={`mb-24`} />}
          <About />
        </div>
      </div>
      <Footer />
    </div>
  )
}