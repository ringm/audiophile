import styles from './Hero.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Button from './Button';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={`${styles.heroData} ${utilStyles.textCenter} ${utilStyles.wrap}`}>
        <p className={`${utilStyles.overline} ${utilStyles.fontDarkSec} ${utilStyles.mb3}`}>new product</p>
        <h1 className={`${utilStyles.headingXl} ${utilStyles.fontWhite} ${utilStyles.mb2}`}>XX99 Mark II Headphones</h1>
        <p className={`${utilStyles.bodyCopy} ${utilStyles.fontDarkSec} ${utilStyles.mb6}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button text={"see product"} type={"one"} />
      </div>
    </div>
  )
}