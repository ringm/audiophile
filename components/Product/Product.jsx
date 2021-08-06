import Image from 'next/image';
import Link from 'next/link';

export function Product({ product, img }) {
  return (
    <div className="flexy-col-center mt-4 md:mt-12 lg:first:mt-0">
      <div className="container lg:flexy-row-center lg:even:flexy-row-reverse-center">
        <div className="flexy-col-center relative h-[352px] lg:w-1/2">
          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            alt={product.name}
            className="md:w-[60%] lg:w-auto md:mx-auto lg:mx-0"
          />
        </div>
        <div className="flexy-col-center lg:flexy-col-start text-center lg:text-left lg:flex-start lg:w-1/2 lg:even:ml-8">
          {product.new && <p className="uppercase text-center text-accent text-sm tracking-superWidest font-normal mb-2 mt-2">new product</p>}
          <h2 className="uppercase text-center font-bold lg:text-left text-3xl md:text-4xl tracking-wider max-w-md my-4">{product.name}</h2>
          <p className="mt-0 text-darkTer font-sm max-w-lg lg:max-w-md mb-6">{product.description}</p>
          <Link as={`/${product.category}/${product.slug}`} href="/[category]/[product]" passHref>
            <span className="btn btn-accent">see product</span>
          </Link>
        </div>
      </div>
    </div>
  )
}