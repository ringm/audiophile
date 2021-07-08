import Image from 'next/image';
import Button from './Button';
import s from './Product.module.scss';

export default function Product({ img, title, desc, newProduct }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className={s.dataContainer}>
          {newProduct && <p className={s.overLine}>new product</p>}
          <h2 className={s.title}>{title}</h2>
          <p className={s.desc}>{desc}</p>
          <Button text={"see product"} type={"one"} />
        </div>
      </div>
    </div>
  )
}