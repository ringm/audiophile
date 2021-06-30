import utilStyles from '../styles/utils.module.scss';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductCategory from '../components/ProductCategory';
import FeaturedProduct from '../components/FeaturedProduct';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <Hero />
      <div className={utilStyles.centerX}>
        <ProductCategory pic={"/assets/category-headphones/mobile/image-xx99-mark-one.jpg"} category={"headphones"} />
        <ProductCategory pic={"/assets/category-speakers/mobile/image-zx9.jpg"} category={"speakers"} />
        <ProductCategory pic={"/assets/category-earphones/mobile/image-yx1-earphones.jpg"} category={"earphones"} />
      </div>
      <div className={utilStyles.centerX}>
        <FeaturedProduct 
          pic={"/assets/home/mobile/image-speaker-zx9.png"}
          picW={172}
          picH={207}
          title={"zx9 speaker"}
          txt={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
        />
      </div>
    </>
  )
}
