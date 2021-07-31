import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = React.forwardRef(({ text = "shop", type = "three", width = "width: max-content", style = "", onClick, href }, ref) => {
  return (
    <span className={`${cn({
      [styles.button_one]: type === "one",
      [styles.button_two]: type === "two",
      [styles.button_three]: type === "three",
      [styles.button_four]: type === "four"
    })} ${width} ${style}`}
      onClick={onClick} ref={ref} href={href}>{text}</span>
  )
})