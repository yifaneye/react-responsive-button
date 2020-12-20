import React, { useState } from 'react';
import styles from './styles.module.css';

export const Button = (props) => {
  const [isShowingRipple, setIsShowingRipple] = useState(false);
  const [rippleSize, setRippleSize] = useState(0);
  const [rippleLeft, setRippleLeft] = useState(0);
  const [rippleTop, setRippleTop] = useState(0);

  function handleClick(event) {
    // has not effect on disabled button
    if (props.disabled) {
      return;
    }

    const button = event.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    setRippleSize(`${diameter}px`);
    setRippleLeft(`${event.clientX - button.offsetLeft - diameter / 2}px`);
    setRippleTop(`${event.clientY - button.offsetTop - diameter / 2}px`);
    setIsShowingRipple(true);

    setTimeout(() => {
      setIsShowingRipple(false);
    }, 600);
  }

  return (
    <button
      onClick={handleClick}
      className={props.disabled ? styles.disabled : ''}
    >
      {props.children}
      {isShowingRipple ? (
        <div
          className={styles.ripple}
          style={{
            width: rippleSize,
            height: rippleSize,
            left: rippleLeft,
            top: rippleTop
          }}
        />
      ) : (
        ''
      )}
    </button>
  );
};
