import Image from 'next/image';
import { Button } from '@/root/components/shared/Button';

export function FeaturedProductTwo({ title, pic }) {
  return (
    <div className="relative flex flex-col items-start justify-center h-320px rounded overflow-hidden mb-8 w-full">
      <Image
        src={pic}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <h2 className="relative z-1 uppercase text-3xl font-semibold mt-0 ml-9 md:ml-12 lg:ml-24 mb-4">{title}</h2>
      <Button style={`ml-9 md:ml-12 lg:ml-24`} text={"see product"} type={"two"} />
    </div>
  )
}