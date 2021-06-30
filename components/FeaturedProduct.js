import utilStyles from '../styles/utils.module.scss';
import styles from './FeaturedProduct.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function FeaturedProduct({ pic, title, txt, picW, picH }) {
  return (
    <div className={`${utilStyles.wrap} ${utilStyles.centerX} ${utilStyles.centerY} ${styles.container}`}>
      <div className={styles.circleSmall}></div>
      <div className={styles.circleMed}></div>
      <div className={styles.circleLarge}></div>
      <Image
        src={pic}
        width={picW}
        height={picH}
        alt={title}
      />
      <h2 className={`${utilStyles.headingXl} ${utilStyles.fontLight} ${utilStyles.mt5} ${utilStyles.front}`}>{title}</h2>
      <p className={`${utilStyles.textCenter} ${utilStyles.bodyCopy} ${utilStyles.fontLightTer} ${utilStyles.mb5} ${utilStyles.front}`}>{txt}</p>
      <Button text={"see product"} type={"four"} />
    </div>
  )
}