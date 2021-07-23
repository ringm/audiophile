import s from './ProductContents.module.scss';

export function ProductContents() {
  return (
    <div className={s.section}>
      <h2 className={s.title}>IN THE BOX</h2>
      <ul className={s.list}>
        <li className={s.list__item}>
          <p className={s.list__item_accent}>1x</p>
          <p className={s.list__item_text}>Headphone Unit</p>
        </li>
        <li className={s.list__item}>
          <p className={s.list__item_accent}>2x</p>
          <p className={s.list__item_text}>Replacement Earcups</p>
        </li>
        <li className={s.list__item}>
          <p className={s.list__item_accent}>1x</p>
          <p className={s.list__item_text}>User Manual</p>
        </li>
        <li className={s.list__item}>
          <p className={s.list__item_accent}>1x</p>
          <p className={s.list__item_text}>3.5mm 5m Audio Cable</p>
        </li>
      </ul>
    </div>
  )
}