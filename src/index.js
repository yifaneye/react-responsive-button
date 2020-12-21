import React, { useState } from 'react';
import styles from './styles.module.css';

export const Button = (props) => {
  const [ripples, setRipples] = useState([]);

  function handleClick(event) {
    // has not effect on disabled button
    if (props.disabled) {
      return;
    }

    const button = event.currentTarget;
    const rippleSize = Math.max(button.clientWidth, button.clientHeight);
    const rippleLeft = event.clientX - button.offsetLeft - rippleSize / 2;
    const rippleTop = event.clientY - button.offsetTop - rippleSize / 2;

    setRipples((oldRipples) => [
      ...oldRipples,
      {
        size: rippleSize,
        left: rippleLeft,
        top: rippleTop
      }
    ]);
  }

  return (
    <button
      onClick={handleClick}
      className={props.disabled ? styles.disabled : ''}
      style={{ ...props.style }}
    >
      {props.children}
      {ripples.map((item, index) => (
        <div
          className={styles.ripple}
          style={{
            width: item.size,
            height: item.size,
            left: item.left,
            top: item.top
          }}
          key={index}
        />
      ))}
    </button>
  );
};
