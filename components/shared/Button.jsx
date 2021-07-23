import Link from 'next/link';
import styles from './Button.module.scss';
import cn from 'classnames';

export function Button({ text, type, style}) {
  return (
    <Link href={""}>
      <a className={`${cn({
        [styles.button_one]: type === "one",
        [styles.button_two]: type === "two",
        [styles.button_three]: type === "three",
        [styles.button_four]: type === "four"
      })} ${style}`}>{text}</a>
    </Link>
  )
}