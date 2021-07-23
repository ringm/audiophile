import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import Image from 'next/image';
import s from './ProductGallery.module.scss'

export function ProductGallery() {

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
      <div className={s.gallery}>
        <div className={s.gallery__img_one}>
          <Image
            src={`/assets/product-xx59-headphones/${device}/image-gallery-1.jpg`}
            alt="xx59 headphones 01"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={s.gallery__img_two}>
          <Image
            src={`/assets/product-xx59-headphones/${device}/image-gallery-2.jpg`}
            alt="xx59 headphones 02"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={s.gallery__img_three}>
          <Image
            src={`/assets/product-xx59-headphones/${device}/image-gallery-3.jpg`}
            alt="xx59 headphones 03"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}