import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/root/components/shared/Button';

export function Category({ pic, category, onCategorySelect }) {
  return (
    <div className="relative flexy-col-center w-full mt-8 md:mt-0 md:ml-8 md:first:ml-0 first:mt-0">
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
      <Link as={`/${category}`} href="/[category]">
        <Button onClick={() => onCategorySelect(category)} />
      </Link>
    </div>
  )
}