import s from './SubNav.module.scss';

export default function SubNav({ title }) {
  return (
    <div className={s.bg}>
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </div>
  )
}