import s from './NavBar.module.scss';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className={s.bg}>
      <div className={s.container}>
        <Image 
          src="/assets/shared/icon-hamburger.svg"
          width={16}
          height={15}
          alt="menu-icon"
          className={s.img}
        />
        <Image 
          src="/assets/shared/logo.svg"
          width={143}
          height={25}
          alt="company-logo"
        />
        <Image 
          src="/assets/shared/icon-cart.svg"
          width={23}
          height={20}
          alt="cart-icon"
          className={s.img}
        />
      </div>
    </div>
  )
}