import useDimensions from "react-cool-dimensions";
import { getDevice } from '../helpers';
import s from './ProductHeader.module.scss';
import Image from 'next/image'
import Qty from './Qty';
import Button from './Button';


export default function ProductHeader({ newProduct }) {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className={s.productHeader}>
      <div className={s.imgContainer}>
        <Image
          src={`/assets/product-xx59-headphones/${device}/image-product.jpg`}
          layout="fill"
          objectFit="cover"
          alt="xx59 headphones"
        />
      </div>
      <div className={s.dataContainer}>
        {newProduct && <p className={s.overTitle}>new product</p>}
        <h2 className={s.title}>xx59 headphones</h2>
        <p className={s.desc}>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
        <p className={s.price}>$899</p>
        <div className={s.addToCartContainer}>
          <Qty />
          <Button text={"add to cart"} type={"one"} />
        </div> 
      </div>
    </div>
  )
}