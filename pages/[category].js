import productData from '@/root/data.json';
import { BasicLayout } from '../components/layout/BasicLayout';
import { useRouter } from 'next/router';
import { Product } from '@/root/components/Product';
import { ProductCategories } from "@/root/components/ProductCategories";

export default function Category({ category, device }) {

  const router = useRouter();

  return (
    <>
      <div className="flexy-col-center bg-black py-4 w-full">
        <div className="flexy-col-center container">
          <h2 className="text-white text-center uppercase text-3xl font-medium tracking-wider">{router.query.category}</h2>
        </div>
      </div>
      {category.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            img={product.image[device]}
          />
        )
      })}
      <ProductCategories styles={`mb-24`} />
    </>
  )
}

Category.Layout = BasicLayout;

export async function getStaticProps({ params }) {
  const category = productData.filter(product => product.category === params.category);
  return {
    props: {
      category: category,
    }
  }
}

export async function getStaticPaths() {
  const categories = productData.reduce((arr, product) => {
    if (!arr.find(category => category === product.category)) {
      arr.push(product.category);
    }
    return arr;
  }, []);
  const paths = categories.map(cat => ({
    params: { category: cat }
  }));
  return { paths, fallback: false }
}