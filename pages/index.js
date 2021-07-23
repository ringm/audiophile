import Head from 'next/head';
import NavBar from '@/root/components/NavBar';
import Hero from '@/root/components/Hero';
import { ProductCategories } from '@/root/components/ProductCategories';
import { FeaturedProducts } from '@/root/components/FeaturedProducts';
import About from '@/root/components/About';
import Footer from '@/root/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar
        bgColor='transparent'
        position='absolute'
      />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <About />
      <Footer />
    </>
  )
}
