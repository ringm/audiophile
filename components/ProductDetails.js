import Button from './Button';
import Image from 'next/image';
import s from './ProductDetails.module.scss';
import Others from './Others';

export default function ProductDetails({ newProduct }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.productHeader}>
          <div className={s.productHeader__imgContainer}>
            <Image
              src="/assets/product-xx59-headphones/mobile/image-product.jpg"
              layout="fill"
              objectFit="cover"
              alt="xx59 headphones"
            />
          </div>
          <div className={s.productHeader__dataContainer}>
            {newProduct && <p className={s.productHeader__overTitle}>new product</p>}
            <h2 className={s.productHeader__title}>xx59 headphones</h2>
            <p className={s.productHeader__desc}>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
            <p className={s.productHeader__price}>$899</p>
            <div className={s.addToCartContainer}>
              <div className={s.qty}>
                <button className={s.qty__button}>-</button>
                <span className={s.qty__number}>1</span>
                <button className={s.qty__button}>+</button>
              </div>
              <Button text={"add to cart"} type={"one"} />
            </div> 
          </div>
          <div className={s.section}>
            <h2 className={s.section__title}>FEATURES</h2>
            <p className={s.section__desc}>As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
          </div>
          <div className={s.section}>
            <h2 className={s.section__title}>IN THE BOX</h2>
            <ul className={s.section__list}>
              <li className={s.section__list__item}>
                <p className={s.section__list__item_accent}>1x</p>
                <p className={s.section__list__item_text}>Headphone Unit</p>
              </li>
              <li className={s.section__list__item}>
                <p className={s.section__list__item_accent}>2x</p>
                <p className={s.section__list__item_text}>Replacement Earcups</p>
              </li>
              <li className={s.section__list__item}>
                <p className={s.section__list__item_accent}>1x</p>
                <p className={s.section__list__item_text}>User Manual</p>
              </li>
              <li className={s.section__list__item}>
                <p className={s.section__list__item_accent}>1x</p>
                <p className={s.section__list__item_text}>3.5mm 5m Audio Cable</p>
              </li>
            </ul>
          </div>
          <div>
            <div className={s.imgContainer}>
              <Image
                src="/assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
                alt="xx59 headphones 01"
                layout="fill"
              />
            </div>
            <div className={s.imgContainer}>
              <Image
                src="/assets/product-xx59-headphones/mobile/image-gallery-2.jpg"
                alt="xx59 headphones 02"
                layout="fill"
              />
            </div>
            <div className={s.imgContainer}>
              <Image
                src="/assets/product-xx59-headphones/mobile/image-gallery-3.jpg"
                alt="xx59 headphones 03"
                layout="fill"
              />
            </div>
          </div>
          <div className={s.section}>
            <h2 className={s.section__title}>YOU MAY ALSO LIKE</h2>
            <Others
              img="/assets/product-xx59-headphones/mobile/image-product.jpg"
              title="xx59 headphones"
            />
            <Others
              img="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
              title="xx59 headphones"
            />
            <Others
              img="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
              title="xx59 headphones"
            />
          </div>
        </div>
      </div>
    </div>
  )
}