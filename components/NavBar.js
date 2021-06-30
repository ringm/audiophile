import styles from './NavBar.module.scss';
import Image from 'next/image';
import Wrapper from './Wrapper';

export default function NavBar() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <Image 
          src="/images/shared/icon-hamburger.svg"
          width={16}
          height={15}
          alt="menu-icon"
        />
        <Image 
          src="/images/shared/logo.svg"
          width={143}
          height={25}
          alt="company-logo"
        />
        <Image 
          src="/images/shared/icon-cart.svg"
          width={23}
          height={20}
          alt="cart-icon"
        />
      </div>
    </Wrapper>
  )
}