import React, { useState } from 'react';
import styles from './styles.module.css';

const Ripple = (props) => {
  const { size, left, top } = props.ripple;
  return (
    <div
      className={styles.ripple}
      style={{ width: size, height: size, left: left, top: top }}
    />
  );
};

const Ripples = (props) => {
  const ripples = props.ripples;
  return ripples.map((ripple, index) => <Ripple ripple={ripple} key={index} />);
};

export const Button = (props) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    // no ripple effect on a disabled button
    if (props.disabled) {
      return;
    }

    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const rippleSize = Math.hypot(buttonRect.width, buttonRect.height);
    const rippleCentreX = event.clientX - buttonRect.left - button.clientLeft;
    const rippleCentreY = event.clientY - buttonRect.top - button.clientTop;
    const rippleLeft = rippleCentreX - rippleSize / 2;
    const rippleTop = rippleCentreY - rippleSize / 2;

    setRipples((oldRipples) => [
      ...oldRipples,
      {
        size: rippleSize,
        left: rippleLeft,
        top: rippleTop
      }
    ]);
  };

  const buttonClassName = `${styles.button}${
    props.disabled ? ' ' + styles.disabled : ''
  }`;

  if (props.href) {
    return (
      <a
        onClick={handleClick}
        className={buttonClassName}
        style={{ ...props.style }}
        {...props}
      >
        {props.children}
        <Ripples ripples={ripples} />
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={buttonClassName}
      style={{ ...props.style }}
      {...props}
    >
      {props.children}
      <Ripples ripples={ripples} />
    </button>
  );
};
