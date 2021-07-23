import s from './Qty.module.scss';

export function Qty() {
  return (
    <div className={s.qty}>
      <button className={s.qty__button}>-</button>
      <span className={s.qty__number}>1</span>
      <button className={s.qty__button}>+</button>
    </div>
  )
}