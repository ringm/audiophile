import Image from 'next/image';

export function Product({ img, name, price, qty }) {
  return (
    <div className="w-full flex items-center justify-between odd:my-6">
      <div className="relative w-[64px] h-[64px] overflow-hidden rounded mr-4">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flexy-col-start mr-auto">
        <p className="uppercase font-md text-black font-semibold m-0">{name}</p>
        <p className="font-md font-semibold text-darkTer m-0">${price}</p>
      </div>
      <p className="text-darkTer font-medium">x{qty}</p>
    </div>
  )
}