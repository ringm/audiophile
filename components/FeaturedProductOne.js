import s from './FeaturedProductOne.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function FeaturedProductOne({ pic, title, txt, picW, picH }) {
  return (
    <div className={s.container}>
      <div className={s.circle_small}></div>
      <div className={s.circle_med}></div>
      <div className={s.circle_large}></div>
      <div className={s.imgContainer}>
        <Image
          src={pic}
          width={410}
          height={493}
          alt={title}
        />
      </div>
      <div className={s.dataContainer}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{txt}</p>
        <Button text={"see product"} type={"four"} />
      </div>
    </div>
  )
}