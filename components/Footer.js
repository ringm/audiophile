import utilStyles from '../styles/utils.module.scss';
import styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={`${styles.footerBg} ${utilStyles.centerX}`}>
      <div className={`${utilStyles.container} ${utilStyles.textCenter} ${utilStyles.centerX}`}>
        <div className={styles.line}></div>
        <div className={utilStyles.mt5}>
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="company logo"
          />
        </div>
        <ul className={`${utilStyles.fontLight} ${utilStyles.headingXxs} ${utilStyles.mt5} ${utilStyles.mb3}`}>
          <li>home</li>
          <li className={utilStyles.mt2}>headphones</li>
          <li className={utilStyles.mt2}>speakers</li>
          <li className={utilStyles.mt2}>earphones</li>
        </ul>
        <p className={`${utilStyles.bodyCopy} ${utilStyles.fontLightTer}`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className={`${utilStyles.centerX} ${utilStyles.mb5}`}>
          <p className={`${utilStyles.bodyCopy} ${utilStyles.fontLightTer}`}>Copyright 2021. All Rights Reserved</p>
          <ul className={utilStyles.flexRow}>
            <li>
              <a>
                <Image
                  src="/assets/shared/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                />
              </a>
            </li>
            <li className={`${utilStyles.ml4} ${utilStyles.mr4}`}>
              <a>
                <Image
                  src="/assets/shared/icon-twitter.svg"
                  width={24}
                  height={24}
                  alt="twitter-icon"
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/shared/icon-instagram.svg"
                  width={24}
                  height={24}
                  alt="instagram-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}