import Link from 'next/link';
import { Cart } from '@/root/components/Cart';

export default function NavBar({ cartVisibility, onCartVisibility, cartItems }) {
  return (
    <div>
      <div className="bg-black flexy-row-center w-full py-7">
        <div className="flex justify-between items-center container">
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="menu-icon"
            className="cursor-pointer w-[16px] h-[15px cursor-pointer]"
          />
          <Link href="/">
            <img src="/assets/shared/logo.svg" alt="company-logo" className="w-[143px] h-[25px] cursor-pointer" />
          </Link>
          <img
            src="/assets/shared/icon-cart.svg"
            alt="cart-icon"
            className="cursor-pointer w-[23px] h-[20px]"
            onClick={() => onCartVisibility(true)}
          />
        </div>
      </div>
      {cartVisibility && <Cart onCartVisibility={onCartVisibility} cartItems={cartItems} />}
    </div>
  )
}