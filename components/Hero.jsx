import Link from 'next/link';
import { Button } from '@/root/components/shared/Button';

export default function Hero({ onProductSelect }) {
  return (
    <div className="flexy-col-center bg-darkSec">
      <div className="flex container h-520px md:h-[650px] bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-center">
        <div className="w-full flexy-col-center lg:items-start">
          <p className="uppercase text-sm text-darkTer tracking-superWidest mb-4">new product</p>
          <h1 className="uppercase text-white text-center lg:text-left font-bold text-4xl lg:text-5xl mb-6 tracking-wide max-w-md">XX99 Mark II Headphones</h1>
          <p className="text-center lg:text-left text-darkTer mt-0 mb-6 max-w-md">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link as="/headphones/xx99-mark-two-headphones" href="/[category]/[product]">
            <Button text={"see product"} type={"one"} onClick={() => onProductSelect(4)} />
          </Link>
        </div>
      </div>
    </div>
  )
}