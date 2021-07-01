import utilStyles from '../styles/utils.module.scss';
import styles from './About.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <div className={`${utilStyles.container} ${utilStyles.textCenter} ${utilStyles.mb5}`}>
      <Image
        className={styles.imgContainer}
        src="/assets/shared/mobile/image-best-gear.jpg"
        width={330}
        height={300}
        alt="best gear"
      />
      <h2 className={`${utilStyles.headingL} ${utilStyles.mt4} ${utilStyles.mb4}`}>Bringing you the best audio gear</h2>
      <p className={`${utilStyles.bodyCopy}`}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  )
}