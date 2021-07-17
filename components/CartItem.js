import s from './CartItem.module.scss';
import Image from 'next/image';
import Qty from './Qty';

export default function CartItem() {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image 
          src="/assets/cart/image-xx59-headphones.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={s.dataContainer}>
        <p className={s.title}>XX99 MK II</p>
        <p className={s.price}>$2.999</p>
      </div>
      <Qty />
    </div>
  )
}