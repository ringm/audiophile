import { Button } from '@/root/components/shared/Button';

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-center">
      <div className="flex w-11/12 max-w-screen-lg h-520px">
        <div className="w-full flex flex-col items-center justify-center lg:items-start">
          <p className="uppercase text-sm text-darkTer tracking-superWidest mb-4">new product</p>
          <h1 className="uppercase text-white text-center font-bold text-4xl mb-6 tracking-wide">XX99 Mark II Headphones</h1>
          <p className="text-center lg:text-left text-darkTer mt-0 mb-6">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button text={"see product"} type={"one"} />
        </div>
      </div>
    </div>
  )
}