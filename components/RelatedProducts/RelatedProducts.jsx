import { OtherProducts } from './OtherProducts';

export function RelatedProducts({ device, product }) {

  return (
    <div className="w-full mb-9 mt-12">
      <h2 className="mt-0 text-2xl md:text-3xl font-semibold text-center">YOU MAY ALSO LIKE</h2>
      <div className="flexy-col-center md:flexy-row-center">
        {product.others.map(other => {
          return (
            <OtherProducts
              key={other.id}
              img={other.image[device]}
              title={other.name}
              slug={other.slug}
              category={other.category}
            />
          )
        })}
      </div>
    </div>
  )
}