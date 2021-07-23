import s from './OtherProducts.module.scss';
import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function OtherProducts({ img, title }) {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <h3 className={s.title}>{title}</h3>
      <Button type={"one"} text={"shop"} />
    </div>
  )
}