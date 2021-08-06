import Link from 'next/link';
import Image from 'next/image';
import { Cart } from '@/root/components/Cart';

export default function NavBar({ cartVisibility, onCartVisibility, cartItems, onCartChange, onCartDelete }) {
  return (
    <div>
      <div className="bg-black flexy-row-center w-full py-7">
        <div className="relative flex justify-between items-center container">
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="menu-icon"
            className="cursor-pointer"
            width={16}
            height={15}
          />
          <Link href="/">
            <Image
              src="/assets/shared/logo.svg"
              alt="company-logo"
              width={143}
              height={25}
              className="cursor-pointer"
            />
          </Link>
          <Image
            src="/assets/shared/icon-cart.svg"
            alt="cart-icon"
            className="cursor-pointer"
            width={23}
            height={20}
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