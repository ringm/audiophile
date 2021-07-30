import { CartItem } from './CartItem';
import { Button } from '@/root/components/shared/Button';

export function Cart() {
  return (
    <div className="w-full flex flex-col items-center justify-start fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="container flex flex-col items-center md:items-end">
        <div className="bg-light flexy-col-center mt-20 rounded w-full max-w-[450px] p-8">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black text-md font-bold m-0">CART (3)</h3>
            <p className="text-darkTer text-sm font-light cursor-pointer underline">Remove All</p>
          </div>
          <div className="w-full grid grid-cols-1 gap-y-4">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-darkTer uppercase font-md font-light">TOTAL</p>
            <p className="text-black font-semibold text-lg">$5,567</p>
          </div>
          <Button type={"one"} text={"checkout"} style={`w-full`} />
        </div>
      </div>
    </div>
  )
}