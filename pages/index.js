import utilStyles from '../styles/utils.module.scss';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductCategory from '../components/ProductCategory';
import FeaturedProductOne from '../components/FeaturedProductOne';
import FeaturedProductTwo from '../components/FeaturedProductTwo';
import FeaturedProductThree from '../components/FeaturedProductThree';
import About from '../components/About';
import Footer from '../components/Footer';

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
      <div className={`${utilStyles.centerX} ${utilStyles.mb10} ${utilStyles.mt7}`}>
        <ProductCategory 
          category={"headphones"}
          pic={"/assets/category-headphones/mobile/image-xx99-mark-one.jpg"} 
        />
        <ProductCategory 
          category={"speakers"}
          pic={"/assets/category-speakers/mobile/image-zx9.jpg"}
        />
        <ProductCategory
          category={"earphones"}
          pic={"/assets/category-earphones/mobile/image-yx1-earphones.jpg"}
        />
      </div>
      <div className={`${utilStyles.centerX} ${utilStyles.mb10}`}>
        <FeaturedProductOne
          pic={"/assets/home/mobile/image-speaker-zx9.png"}
          picW={172}
          picH={207}
          title={"zx9 speaker"}
          txt={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
        />
        <FeaturedProductTwo
          pic={"/assets/home/mobile/image-speaker-zx7.jpg"}
          picW={640}
          picH={640}
          title={"zx7 speaker"}
        />
        <FeaturedProductThree
          pic={"/assets/home/mobile/image-earphones-yx1.jpg"}
          picW={330}
          picH={200}
          title={"yx1 earphones"}
        />
      </div>
      <div className={`${utilStyles.centerX} ${utilStyles.mb10}`}>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
