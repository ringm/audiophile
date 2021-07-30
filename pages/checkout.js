import { CheckOutForm, OrderSummary, OrderConfirmation } from "@/root/components/CheckOut";
import { Footer } from '@/root/components/Footer';

export default function CheckOut({ orderConfirmed = false }) {
  return (
    <div className="flexy-col-center">
      <div className="container lg:flex lg:items-start mb-20">
        <CheckOutForm />
        <OrderSummary />
        {orderConfirmed && <OrderConfirmation />}
      </div>
      <Footer />
    </div>
  )
}