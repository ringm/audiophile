import s from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.line}></div>
        <div className={s.logo}>
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="company logo"
          />
        </div>
        <ul className={s.links_list}>
          <li className={s.links_list_item}>
            <Link href="#">home</Link>
          </li>
          <li className={s.links_list_item}>
            <Link href="#">headphones</Link>
          </li>
          <li className={s.links_list_item}>
            <Link href="#">speakers</Link>
          </li>
          <li className={s.links_list_item}>
            <Link href="#">earphones</Link>
          </li>
        </ul>
        <p className={s.text}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className={s.lastRow}>
          <p className={s.copyRightText}>Copyright 2021. All Rights Reserved</p>
          <ul className={s.socialLinks_list}>
            <li className={s.socialLinks_list_item}>
              <a href="#">
                <Image
                  src="/assets/shared/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                />
              </a>
            </li>
            <li className={s.socialLinks_list_item}>
              <a href="#">
                <Image
                  src="/assets/shared/icon-twitter.svg"
                  width={24}
                  height={24}
                  alt="twitter-icon"
                />
              </a>
            </li>
            <li className={s.socialLinks_list_item}>
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