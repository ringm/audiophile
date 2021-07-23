import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import s from './[productName].module.scss';
import Head from "next/head";
import NavBar from "@/root/components/NavBar";
import { ProductHeader, ProductFeatures, ProductContents, ProductGallery } from '@/root/components/Product';
import { RelatedProducts } from "@/root/components/RelatedProducts";
import { ProductCategories } from '@/root/components/ProductCategories';
import About from "@/root/components/About";
import Footer from '@/root/components/Footer';

export default function ProductName() {

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
      <NavBar bgColor="black" cart />
      <div className={s.wrapper}>
        <div className={s.container}>
          <ProductHeader />
          <div className={s.section__wrapper}>
            <ProductFeatures />
            <ProductContents />
          </div>
          <ProductGallery />
          <RelatedProducts />
          {device !== 'mobile' && <ProductCategories />}
          <About />
        </div>
      </div>
      <Footer />
    </div>
  )
}