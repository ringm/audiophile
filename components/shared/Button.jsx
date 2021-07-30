import styles from './Button.module.scss';
import cn from 'classnames';

export function Button({ text = "shop", type = "three", width = "width: max-content", style = "", onClick }) {
  return (
    <span className={`${cn({
      [styles.button_one]: type === "one",
      [styles.button_two]: type === "two",
      [styles.button_three]: type === "three",
      [styles.button_four]: type === "four"
    })} ${width} ${style}`}
      onClick={onClick}>{text}</span>
  )
}