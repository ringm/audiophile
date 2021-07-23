import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function FeaturedProductThree({ pic, title }) {
  return (
    <div className="w-full h-320px md:flex items-stretch">
      <div className="relative w-full h-200px overflow-hidden md:w-1/2 md:h-auto">
        <Image
          src={pic}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="flex flex-col items-start justify-center bg-lightSec rounded py-6 md:h-full md:w-1/2 md:mt-0 md:ml-8">
        <h2 className="relative z-1 uppercase text-3xl font-semibold mt-0 ml-9 md:ml-12 lg:ml-24 mb-4">{title}</h2>
        <Button text={"see product"} type={"two"} style={`ml-9 md:ml-12 lg:ml-24`} />
      </div>
    </div>
  )
}