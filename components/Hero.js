import styles from './Hero.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={`${styles.heroData} ${utilStyles.textCenter}`}>
        <p className={`${utilStyles.overline} ${utilStyles.fontDarkTertiary}`}>new product</p>
        <h1 className={`${utilStyles.headingXxl} ${utilStyles.fontLight}`}>XX99 Mark II Headphones</h1>
        <p className={`${utilStyles.bodyCopy} ${utilStyles.bodyCopy} ${utilStyles.fontDarkTertiary}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      </div>
    </div>
  )
}