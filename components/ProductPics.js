import Image from 'next/image';
import s from './ProductPics.module.scss';

export default function ProductPics({ pics }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.pic_container_one}>
          <Image />
        </div>
        <div className={s.pic_container_two}>
          <Image />
        </div>
        <div className={s.pic_container_three}>
          <Image />
        </div>
      </div>
    </div>
  )
}