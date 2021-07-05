import s from './FeaturedProductTwo.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function FeaturedProductTwo({ title, pic }) {
  return (
    <div className={s.container}>
      <Image
        src={pic}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <h2 className={s.title}>{title}</h2>
      <Button style={s.button} text={"see product"} type={"two"} />
    </div>
  )
}