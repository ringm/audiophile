import s from './Others.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function Others({ img, title }) {
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