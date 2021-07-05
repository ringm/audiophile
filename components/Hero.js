import s from './Hero.module.scss';
import Button from './Button';

export default function Hero() {
  return (
    <div className={s.bg}>
      <div className={s.container}>
        <div className={s.dataContainer}>
          <p className={s.overTitle}>new product</p>
          <h1 className={s.title}>XX99 Mark II Headphones</h1>
          <p className={s.text}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button text={"see product"} type={"one"} />
        </div>
      </div>
    </div>
  )
}