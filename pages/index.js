import Head from 'next/head';
import { BasicLayout } from '../components/layout';
import { Hero } from '@/root/components/Product';
import { ProductCategories } from '@/root/components/ProductCategories';
import { FeaturedProducts } from '@/root/components/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Head>
        <title>audiophile</title>
      </Head>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
    </>
  )
}

Home.Layout = BasicLayout;