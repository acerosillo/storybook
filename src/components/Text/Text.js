import * as React from 'react';
import { string, oneOf } from 'prop-types';
import cx from 'classnames';

import styles from './text.module.css';

const Text = ({
  className,
  children,
  element = 'span',
  type,
  color,
  textStyle,
  ...props
}) => {
  const finalClassName = cx(
    className,
    styles.base,
    styles[type],
    styles[color],
    styles[textStyle],
  );

  return React.createElement(element, { className: finalClassName, ...props }, children);
};

Text.propTypes = {
  className: string,
  children: string.isRequired,
  element: string.isRequired,
  type: oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: oneOf(['white', 'darkGrey']),
  textStyle: oneOf(['light', 'uppercase', 'bold', 'regular', 'small']),
};

export default Text;
