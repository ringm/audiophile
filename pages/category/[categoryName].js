import useDimensions from "react-cool-dimensions";
import { getDevice  } from "../../helpers";
import Head from 'next/head';
import Product from '../../components/Product';
import ProductCategories from "../../components/ProductCategories";
import About from "../../components/About";

export default function Category() {
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Product
        ref={observe}
        img={`/assets/product-xx99-mark-two-headphones/${device}/image-product.jpg`}
        title={"xx99 mark II headphones"}
        desc={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'}
        newProduct
      />
      <Product
        img={`/assets/product-xx99-mark-one-headphones/${device}/image-product.jpg`}
        title={"xx99 mark I headphones"}
        desc={'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'}
      />
      <Product
        img={`/assets/product-xx59-headphones/${device}/image-product.jpg`}
        title={"xx59 headphones"}
        desc={'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'}
      />
      <ProductCategories />
      <About />
    </>
  )
}