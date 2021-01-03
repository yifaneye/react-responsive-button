import React, { useState } from 'react';
import styles from './styles.module.css';

const Ripples = (props) => {
  const ripples = props.ripples;
  return ripples.map((item, index) => (
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
  ));
};

export const Button = (props) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    // no ripple effect on a disabled button
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
  };

  return (
    <button
      onClick={handleClick}
      className={props.disabled ? styles.disabled : ''}
      style={{ ...props.style }}
    >
      {props.children}
      <Ripples ripples={ripples} />
    </button>
  );
};
