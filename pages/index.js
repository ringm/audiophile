import { BasicLayout } from '../components/layout';
import { Hero } from '@/root/components/Product';
import { ProductCategories } from '@/root/components/ProductCategories';
import { FeaturedProducts } from '@/root/components/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
    </>
  )
}

Home.Layout = BasicLayout;