import useDimensions from "react-cool-dimensions";
import { getDevice } from '@/root/utils/helpers';
import Image from 'next/image'
import { Qty } from '@/root/components/shared/Qty';
import { Button } from '@/root/components/shared/Button';


export function ProductHeader({ product, onAddToCart }) {

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const device = getDevice(width);

  return (
    <div ref={observe} className="flexy-col-center mb-12 mt-8 md:flexy-row-center md:my-24 lg:my-16">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[560px] mb-5 md:w-1/2 md:mb-0">
        <Image
          src={product.image[device]}
          layout="fill"
          objectFit="cover"
          alt={product.name}
        />
      </div>
      <div className="flexy-col-start md:w-1/2 md:ml-6">
        {product.new && <p className="uppercase text-md font-normal text-accent tracking-superWidest mb-4">new product</p>}
        <h2 className="mt-0 text-3xl lg:text-4xl uppercase font-bold max-w-md mb-4 lg:mb-8">{product.name}</h2>
        <p className="mt-0 text-darkTer font-light text-md max-w-lg lg:max-w-md mb-4 lg:mb-8">{product.description}</p>
        <p className="font-bold text-lg tracking-wider mb-4 lg:mb-8">${product.price}</p>
        <div className="w-full flex justify-between lg:justify-start">
          <Qty className="mr-4" />
          <Button text={"add to cart"} type={"one"} onClick={() => onAddToCart(product.id)} />
        </div>
      </div>
    </div>
  )
}