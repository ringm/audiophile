import s from './FeaturedProductThree.module.scss';
import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function FeaturedProductThree({ pic, title }) {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image
          src={pic}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={s.img}
        />
      </div>
      <div className={s.dataContainer}>
        <h2 className={s.title}>{title}</h2>
        <Button text={"see product"} type={"two"} style={s.button} />
      </div>
    </div>
  )
}