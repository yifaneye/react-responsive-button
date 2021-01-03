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

    if (props.href) {
      window.open(props.href, targetAttribute, 'noopener');
      /*
      The 'noopener' feature opens in a new tab on Safari, Chrome, Firefox, Opera and Edge.
      The 'noreferer' feature opens in a new tab on Safari (with explicit settings),
          opens in a new window on Chrome, Firefox (ignores explicit settings), Opera and Edge.
      */
    }
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
