import s from './ProductCategory.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function ProductCategory({ pic, category }) {
  return (
    <div className={s.container}>
      <div className={s.bg}></div>
      <div className={s.imgContainer}>
        <Image
          src={pic}
          layout="fill"
          objectFit="contain"
          alt={category}
        />
      </div>
      <h3 className={s.title}>{category}</h3>
      <Button type={"three"} text={"shop"} />
    </div>
  )
}