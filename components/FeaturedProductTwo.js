import utilStyles from '../styles/utils.module.scss';
import styles from './FeaturedProductTwo.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function FeaturedProductTwo({ pic, title, picW, picH }) {
  return (
    <div className={`${utilStyles.wrap} ${utilStyles.centerY} ${styles.container}`}>
      <div className={styles.img}>
        <Image
          src={pic}
          width={picW}
          height={picH}
          alt={title}
        />
      </div>
      <h2 className={`${utilStyles.headingM} ${utilStyles.fontDark} ${utilStyles.ml4} ${utilStyles.mb3} ${utilStyles.front}`}>{title}</h2>
      <Button style={utilStyles.ml4} text={"see product"} type={"two"} />
    </div>
  )
}