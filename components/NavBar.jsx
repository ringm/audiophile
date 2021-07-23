import Image from 'next/image';
import { Cart } from '@/root/components/Cart';

export default function NavBar({ cart }) {
  return (
    <div>
      <div className="bg-black flex items-center justify-center w-full py-7">
        <div className="flex justify-between items-center w-11/12 max-w-screen-lg">
          <Image 
            src="/assets/shared/icon-hamburger.svg"
            width={16}
            height={15}
            alt="menu-icon"
            className="cursor-pointer"
          />
          <Image 
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
          />
          <Image 
            src="/assets/shared/icon-cart.svg"
            width={23}
            height={20}
            alt="cart-icon"
            className="cursor-pointer"
          />
        </div>
      </div>
      {cart && <Cart />}
    </div>
  )
}