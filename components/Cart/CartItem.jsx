import Image from 'next/image';
import { CartQty } from './CartQty';

export function CartItem({ item, onCartChange, formatMoney }) {
  return (
    <div className="w-full flex items-center justify-between even:my-2">
      <div className="relative w-[64px] h-[64px] overflow-hidden rounded">
        <Image
          src={item.img}
          alt={item.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flexy-col-start mr-auto">
        <p className="uppercase font-md text-black font-semibold m-0">{item.name}</p>
        <p className="font-md font-semibold text-darkTer m-0">${formatMoney(item.price)}</p>
      </div>
      <CartQty productID={item.id} qty={item.qty} onCartChange={onCartChange} />
    </div>
  )
}