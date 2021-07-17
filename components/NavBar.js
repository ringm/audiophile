import s from './NavBar.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import Cart from './Cart';

export default function NavBar({ bgColor, position = "relative", cart }) {
  return (
    <div className={s.wrapper}>
      <div className={`${cn({
        [s.bgTransparent]: bgColor === "transparent",
        [s.bgBlack]: bgColor === "black",
        [s.pRelative]: position === "relative",
        [s.pAbsolute]: position === "absolute"
      })} ${s.bg}`}>
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
      {cart && <Cart />}
    </div>
  )
}