import Link from 'next/link';
import { Cart } from '@/root/components/Cart';

export default function NavBar({ cartVisibility, onCartVisibility, cartItems, onCartChange, onCartDelete }) {
  return (
    <div>
      <div className="bg-black flexy-row-center w-full py-7">
        <div className="relative flex justify-between items-center container">
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
          {cartItems.length > 0 &&
            <div className="absolute top-3 right-2 bg-accent w-[18px] h-[18px] rounded text-white text-xs font-medium flexy-col-center"
            >{cartItems.length}</div>
          }
        </div>
      </div>
      {cartVisibility && <Cart onCartVisibility={onCartVisibility} cartItems={cartItems} onCartChange={onCartChange} onCartDelete={onCartDelete} />}
    </div>
  )
}