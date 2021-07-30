import { CheckCircleIcon } from '@heroicons/react/solid';
import { Product } from '../orderSummary';
import { Button } from '@/root/components/shared/Button';

export function OrderConfirmation() {

  const products = [
    {
      name: 'XX99 MK II',
      price: '$2.999',
      amount: 'x1'
    },
    {
      name: 'XX59',
      price: '$899',
      amount: 'x2'
    },
    {
      name: 'YX1',
      price: '$599',
      amount: 'x1'
    }
  ];

  return (
    <div className="fixed inset-0 w-full h-full flexy-col-center bg-black bg-opacity-50 z-50">
      <div className="w-11/12 max-w-[540px] rounded bg-white p-6 md:py-10">
        <CheckCircleIcon className="text-accent w-[64px] mb-4" />
        <h2 className="uppercase text-2xl md:text-4xl font-medium mb-4">thank you<br />for your order</h2>
        <p className="text-darkTer md: mb-8">You will recieve an email confirmation shortly.</p>
        <div className="flexy-col-center md:flex md:flex-row md:items-stretch mb-4 md:mb-8">
          <div className="flexy-col-center w-full mb-4">
            <Product key={products[0].name} name={products[0].name} price={products[0].price} amount={products[0].amount} />
            {products.length > 1 && <p className="text-darkTer font-medium text-sm">And {products.length - 1} other item(s)</p>}
          </div>
          <div className="flexy-col-start p-4 md:px-6 bg-black w-full rounded-b md:rounded-tr md:rounded-br md:rounded-bl-none md:ml-4">
            <p className="uppercase text-darkTer text-md md:mb-2">grand total</p>
            <p className="text-medium font-medium md:text-xl text-white">$5,446</p>
          </div>
        </div>
        <Button type="one" text="back to home" width="w-full" />
      </div>
    </div>
  )
}