import Image from 'next/image';
import { Qty } from '@/root/components/shared/Qty';

export function CartItem() {
  return (
    <div className="w-full flex items-center justify-between odd:my-6">
      <div className="relative w-[64px] h-[64px] overflow-hidden rounded">
        <Image
          src="/assets/cart/image-xx59-headphones.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flexy-col-start">
        <p className="uppercase font-md text-black font-semibold m-0">XX99 MK II</p>
        <p className="font-md font-semibold text-darkTer m-0">$2.999</p>
      </div>
      <Qty />
    </div>
  )
}