import { Product } from './Product';
import { Button } from '@/root/components/shared/Button';

export function OrderSummary() {
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
    <div className="flexy-col-start mt-8 lg:mt-0 lg:w-5/12">
      <h2 className="uppercase font-bold tracking-wider text-xl">Summary</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {products.map(product => {
          return <Product key={product.name} name={product.name} price={product.price} amount={product.amount} />
        })}
      </div>
      <div className="w-full grid grid-cols-1 gap-2 mb-8">
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">total</p>
          <p className="font-bold">$5,396</p>
        </div>
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">shipping</p>
          <p className="font-bold">$50</p>
        </div>
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">vat (included)</p>
          <p className="font-bold">$5,396</p>
        </div>
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">gran total</p>
          <p className="font-bold">$5,446</p>
        </div>
      </div>
      <Button type="one" text="continue and pay" width="w-full" />
    </div>
  )
}