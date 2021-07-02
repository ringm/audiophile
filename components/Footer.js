import utilStyles from '../styles/utils.module.scss';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={`${styles.footerBg} ${utilStyles.centerX}`}>
      <div className={`${utilStyles.container} ${utilStyles.textCenter} ${utilStyles.centerX}`}>
        <div className={`${styles.line} ${utilStyles.mb8}`}></div>
        <div>
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="company logo"
          />
        </div>
        <ul className={`${utilStyles.fontWhite} ${utilStyles.headingXxs} ${utilStyles.mt6} ${utilStyles.mb5}`}>
          <li>
            <Link href="#">home</Link>
          </li>
          <li className={utilStyles.mt2}>
            <Link href="#">headphones</Link>
          </li>
          <li className={utilStyles.mt2}>
            <Link href="#">speakers</Link>
          </li>
          <li className={utilStyles.mt2}>
            <Link href="#">earphones</Link>
          </li>
        </ul>
        <p className={`${utilStyles.bodyCopy} ${utilStyles.fontDarkSec} ${utilStyles.mb5}`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className={`${utilStyles.centerX} ${utilStyles.mb5}`}>
          <p className={`${utilStyles.bodyCopy} ${utilStyles.fontLight} ${utilStyles.mb4}`}>Copyright 2021. All Rights Reserved</p>
          <ul className={utilStyles.flexRow}>
            <li>
              <a href="#">
                <Image
                  src="/assets/shared/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                />
              </a>
            </li>
            <li className={`${utilStyles.ml4} ${utilStyles.mr4}`}>
              <a href="#">
                <Image
                  src="/assets/shared/icon-twitter.svg"
                  width={24}
                  height={24}
                  alt="twitter-icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
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