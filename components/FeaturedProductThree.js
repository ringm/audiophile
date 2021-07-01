import styles from './FeaturedProductThree.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import Button from './Button';

export default function FeaturedProductThree({ pic, picW, picH, title }) {
  return (
    <div className={styles.imgContainer}>
      <Image
        src={pic}
        width={picW}
        height={picH}
        alt={title}
      />
      <div className={utilStyles.centerY}>
        <h2 className={`${utilStyles.headingM} ${utilStyles.fontDark} ${utilStyles.ml4} ${utilStyles.mt5} ${utilStyles.mb3} ${utilStyles.front}`}>{title}</h2>
        <Button text={"see product"} type={"two"} style={`${utilStyles.ml4} ${utilStyles.mb5}`} />
      </div>
    </div>
  )
}