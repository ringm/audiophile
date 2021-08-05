import { useState } from 'react';
import { CheckOutForm, OrderSummary, OrderConfirmation } from "@/root/components/CheckOut";

export default function CheckOut({ cartItems, onCartDelete }) {

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function handleOrderConfirmed(bool) {
    setOrderConfirmed(bool);
  }

  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + (curr.price * curr.qty);
  }, 0);

  const shipping = 50;

  const vat = cartTotal * 0.2;

  const grandTotal = cartTotal + shipping + vat;

  return (
    <div className="flexy-col-center lg:mt-12">
      <div className="container lg:flex lg:items-start mb-20">
        <CheckOutForm />
        <OrderSummary
          cartItems={cartItems}
          cartTotal={cartTotal}
          shipping={shipping}
          vat={vat}
          grandTotal={grandTotal}
          onOrderConfirmed={handleOrderConfirmed}
        />
        {orderConfirmed &&
          <OrderConfirmation
            cartItems={cartItems}
            onOrderConfirmed={handleOrderConfirmed}
            grandTotal={grandTotal}
            onCartDelete={onCartDelete} />}
      </div>
    </div>
  )
}