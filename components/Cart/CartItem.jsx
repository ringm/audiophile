import Image from 'next/image';
import { Qty } from '@/root/components/shared/Qty';

export function CartItem({ item }) {
  return (
    <div className="w-full flex items-center justify-between even:my-2">
      <div className="relative w-[64px] h-[64px] overflow-hidden rounded">
        <Image
          src={item.img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flexy-col-start mr-auto">
        <p className="uppercase font-md text-black font-semibold m-0">{item.name}</p>
        <p className="font-md font-semibold text-darkTer m-0">${item.price}</p>
      </div>
      <Qty qty={item.qty} />
    </div>
  )
}