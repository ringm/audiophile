import Image from 'next/image';
import Link from 'next/link';

export function FeaturedProductTwo({ title, pic }) {
  return (
    <div className="relative flexy-col-start h-320px rounded overflow-hidden mb-8 w-full">
      <Image
        src={pic}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <h2 className="relative z-1 uppercase text-3xl font-semibold mt-0 ml-9 md:ml-12 lg:ml-24 mb-4">{title}</h2>
      <Link as="/speakers/zx7-speaker" href="[category]/[product]">
        <span className="btn btn-transparent ml-9 md:ml-12 lg:ml-24">see product</span>
      </Link>
    </div>
  )
}