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

  const getTargetAttribute = (targetProp) => {
    const targetAttributeAccepted = ['_blank', '_self', '_parent', '_top'];
    if (!targetProp) return '_self'; // default value
    if (targetAttributeAccepted.includes(targetProp)) return targetProp;
    return '_self'; // default value
  };

  const targetAttribute = getTargetAttribute(props.target);

  const handleClick = (event) => {
    // no ripple effect on a disabled button
    if (props.disabled) {
      return;
    }

    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const rippleSize = Math.max(buttonRect.width, buttonRect.height);
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

    if (props.href) {
      window.open(props.href, targetAttribute, 'noopener');
      /*
      The 'noopener' feature opens in a new tab on Safari, Chrome, Firefox, Opera and Edge.
      The 'noreferer' feature opens in a new tab on Safari (with explicit settings),
          opens in a new window on Chrome, Firefox (ignores explicit settings), Opera and Edge.
      */
    }
  };

  const buttonClassName = `${styles.button}${
    props.disabled ? ' ' + styles.disabled : ''
  }`;

  return (
    <button
      onClick={handleClick}
      className={buttonClassName}
      style={{ ...props.style }}
    >
      {props.children}
      <Ripples ripples={ripples} />
    </button>
  );
};
