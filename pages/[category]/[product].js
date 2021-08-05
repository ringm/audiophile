import productData from '@/root/data.json';
import { BasicLayout } from '@/root/components/layout/BasicLayout';
import { ProductHeader, ProductFeatures, ProductContents, ProductGallery } from '@/root/components/Product';
import { RelatedProducts } from "@/root/components/RelatedProducts";
import { ProductCategories } from '@/root/components/ProductCategories';

export default function Product({ product, onAddToCart, device }) {

  return (
    <div className="flexy-col-center">
      <div className="container">
        <ProductHeader device={device} product={product} onAddToCart={onAddToCart} />
        <div className="mb-16 lg:flexy-row-center">
          <ProductFeatures product={product} />
          <ProductContents product={product} />
        </div>
        <ProductGallery device={device} product={product} />
        <RelatedProducts device={device} product={product} />
        {device !== 'mobile' && <ProductCategories styles={`mb-24`} />}
      </div>
    </div>
  )
}

Product.Layout = BasicLayout;

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