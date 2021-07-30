import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import { OtherProducts } from './OtherProducts';

export function RelatedProducts({ product, onProductSelect }) {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className="w-full mb-9 mt-12">
      <h2 className="mt-0 text-2xl md:text-3xl font-semibold text-center">YOU MAY ALSO LIKE</h2>
      <div className="flexy-col-center md:flexy-row-center">
        {product.others.map(other => {
          return (
            <OtherProducts
              key={other.id}
              id={other.id}
              img={other.image[device]}
              title={other.name}
              slug={other.slug}
              onProductSelect={onProductSelect}
            />
          )
        })}
      </div>
    </div>
  )
}