import { Product } from './Product';
import { formatMoney } from '@/root/utils/helpers';

export function OrderSummary({ cartItems, onOrderConfirmed, cartTotal, shipping, vat, grandTotal }) {

  return (
    <div className="flexy-col-start mt-8 lg:mt-0 lg:w-5/12">
      <h2 className="uppercase font-bold tracking-wider text-xl">Summary</h2>
      <div className="grid grid-cols-1 w-full mb-4">
        {cartItems.map(item => {
          return <Product key={item.id} name={item.name} img={item.img} price={formatMoney(item.price)} qty={item.qty} />
        })}
      </div>
      <div className="w-full grid grid-cols-1 gap-2 mb-8">
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">total</p>
          <p className="font-bold">${formatMoney(cartTotal)}</p>
        </div>
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">shipping</p>
          <p className="font-bold">${formatMoney(shipping)}</p>
        </div>
        <div className="flexy-row-center w-full mb-4">
          <p className="text-darkTer font-light uppercase mr-auto">vat (included)</p>
          <p className="font-bold">${formatMoney(vat.toFixed(1))}</p>
        </div>
        <div className="flexy-row-center w-full">
          <p className="text-darkTer font-light uppercase mr-auto">grand total</p>
          <p className="font-bold text-accent">${formatMoney(grandTotal.toFixed(1))}</p>
        </div>
      </div>
      <span className="btn btn-accent w-full" onClick={() => onOrderConfirmed(true)}>continue and pay</span>
    </div>
  )
}