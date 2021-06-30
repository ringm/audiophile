import styles from './Hero.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroData}>
        <h1 className={`${utilStyles.headingXxl} ${utilStyles.fontLight} ${utilStyles.textCenter}`}>XX99 Mark II Headphones</h1>
      </div>
    </div>
  )
}