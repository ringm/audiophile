import Image from 'next/image';

export function ProductGallery({ device, product }) {

  return (
    <div className="w-full mb-8">
      <div className="w-full rounded grid gap-y-6 md:gap-y-2 md:gap-x-2 md:grid-cols-40/60 md:grid-rows-2">
        <div className="relative w-full overflow-hidden rounded h-[174px] md:h-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <Image
            src={product.gallery.first[device]}
            alt={`${product.name}-01`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded h-[174px] md:h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
          <Image
            src={product.gallery.second[device]}
            alt={`${product.name}-02`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full overflow-hidden rounded h-[368px] lg:h-[592px] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3">
          <Image
            src={product.gallery.third[device]}
            alt={`${product.name}-03`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}