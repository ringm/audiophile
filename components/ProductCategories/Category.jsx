import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function Category({ pic, category }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-8 first:mt-0">
      <div className="absolute z-0 top-1/4 bg-lightSec w-full h-185px rounded"></div>
      <div className="relative w-full h-125px">
        <Image
          src={pic}
          layout="fill"
          objectFit="contain"
          alt={category}
        />
      </div>
      <h3 className="relative z-1 m-0 mt-4 uppercase font-medium text-l tracking-wide">{category}</h3>
      <Button type={"three"} text={"shop"} />
    </div>
  )
}