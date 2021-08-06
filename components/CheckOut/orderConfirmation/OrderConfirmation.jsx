import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Product } from '../orderSummary';
import { formatMoney } from '@/root/utils/helpers';

export function OrderConfirmation({ cartItems, onOrderConfirmed, grandTotal, onCartDelete }) {

  return (
    <div className="fixed inset-0 w-full h-full flexy-col-center bg-black bg-opacity-50 z-50">
      <div className="w-11/12 max-w-[540px] rounded bg-white p-6 md:py-10">
        <CheckCircleIcon className="text-accent w-[64px] mb-4" />
        <h2 className="uppercase text-2xl md:text-4xl font-medium mb-4">thank you<br />for your order</h2>
        <p className="text-darkTer md: mb-8">You will recieve an email confirmation shortly.</p>
        <div className="flexy-col-center md:flex md:flex-row md:items-stretch mb-4 md:mb-8">
          <div className="flexy-col-center w-full mb-4">
            <Product key={cartItems[0]?.id} name={cartItems[0]?.name} img={cartItems[0]?.img} price={formatMoney(cartItems[0]?.price)} qty={cartItems[0]?.qty} />
            {cartItems.length > 1 && <p className="text-darkTer font-medium text-sm">And {cartItems.length - 1} other item(s)</p>}
          </div>
          <div className="flexy-col-start p-4 md:px-6 bg-black w-full rounded-b md:rounded-tr md:rounded-br md:rounded-bl-none md:ml-4">
            <p className="uppercase text-darkTer text-md md:mb-2">grand total</p>
            <p className="text-medium tracking-wider font-medium md:text-xl text-white">${formatMoney(grandTotal.toFixed(1))}</p>
          </div>
        </div>
        <Link href="/" passHref>
          <span
            className="btn btn-accent w-full"
            onClick={() => {
              onOrderConfirmed(false)
              onCartDelete()
            }}>back to home</span>
        </Link>
      </div>
    </div>
  )
}