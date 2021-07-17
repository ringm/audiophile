import useDimensions from "react-cool-dimensions";
import { getDevice } from '../helpers';
import s from './RelatedProducts.module.scss';
import Others from './Others';

export default function RelatedProducts() {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className={s.section}>
      <h2 className={s.title}>YOU MAY ALSO LIKE</h2>
      <div className={s.otherProducts}>
        <Others
          img={`/assets/product-xx59-headphones/${device}/image-product.jpg`}
          title="xx59 headphones"
        />
        <Others
          img={`/assets/product-xx99-mark-one-headphones/${device}/image-product.jpg`}
          title="xx59 headphones"
        />
        <Others
          img={`/assets/product-xx99-mark-two-headphones/${device}/image-product.jpg`}
          title="xx59 headphones"
        />
      </div>
    </div>
  )
}