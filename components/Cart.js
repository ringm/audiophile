import s from './Cart.module.scss';
import CartItem from './CartItem';
import Button from './Button';

export default function Cart() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h3 className={s.title}>CART (3)</h3>
          <p className={s.removeAll}>Remove All</p>
        </div>
        <div className={s.cartItems}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={s.totalContainer}>
          <p className={s.total}>TOTAL</p>
          <p className={s.amount}>$5,567</p>
        </div>
        <Button type={"one"} text={"checkout"} style={s.fullWidth} />
      </div>
    </div>
  )
}