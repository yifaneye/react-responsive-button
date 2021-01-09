import React, { useState, memo } from 'react';
import styles from './styles.module.css';
import shapesStyles from './shapes.module.css';
import PropTypes from 'prop-types';

const Ripple = memo(
  (props) => {
    const { size, left, top } = props.ripple;
    return (
      <div
        className={styles.ripple}
        style={{ width: size, height: size, left: left, top: top }}
      />
    );
  },
  () => true
);

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
  }${props.text ? ' ' + styles.text : ''}${
    props.bordered ? ' ' + styles.bordered : ''
  }${props.shape ? ' ' + shapesStyles[props.shape] : ''}`;

  const TagName = props.href ? 'a' : 'button';

  const { disabled, text, bordered, shape, ...otherProps } = props;

  return (
    <TagName
      onClick={handleClick}
      className={buttonClassName}
      style={{ ...props.style }}
      {...otherProps}
    >
      {props.children}
      <Ripples ripples={ripples} />
    </TagName>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.bool,
  bordered: PropTypes.bool,
  shape: PropTypes.oneOf(['rectangle', 'pill', 'ellipse']),
  href: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
