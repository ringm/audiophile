import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/root/components/shared/Button';

export function OtherProducts({ img, title, slug, category }) {
  return (
    <div className="relative flexy-col-center w-full odd:my-8 md:ml-8 md:first:ml-0">
      <div className="relative mx-auto w-full h-[180px] lg:h-[320px] mb-4 rounded overflow-hidden">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <h3 className="text-center m-2 uppercase font-semibold text-xl mb-6 max-w-md">{title}</h3>
      <Link as={`/${category}/${slug}`} href="/[category]/[product]" passHref>
        <Button type={"one"} text={"shop"} />
      </Link>
    </div >
  )
}