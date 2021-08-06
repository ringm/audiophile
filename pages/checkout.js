import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckOutForm, OrderSummary, OrderConfirmation } from "@/root/components/CheckOut";

export default function CheckOut({ cartItems, onCartDelete }) {

  const { register, handleSubmit, formState: { errors } } = useForm();
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
        <CheckOutForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onOrderConfirmed={handleOrderConfirmed}
        />
        <OrderSummary
          cartItems={cartItems}
          cartTotal={cartTotal}
          shipping={shipping}
          vat={vat}
          grandTotal={grandTotal}
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