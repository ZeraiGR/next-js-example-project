import React from 'react';
import cn from 'classnames';

import ArrowIcon from './arrow.svg';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import { motion } from 'framer-motion';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      className={cn(
        styles.button,
        className,
        { [styles.primary]: appearance === 'primary' },
        { [styles.ghost]: appearance === 'ghost' },
      )}
      {...props}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(
            styles.arrow,
            { [styles.right]: arrow === 'right' },
            { [styles.down]: arrow === 'down' },
          )}>
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
