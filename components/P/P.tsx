import React from 'react';
import cn from 'classnames';

import { PProps } from './P.props';
import styles from './P.module.scss';

export const P = ({ size = 16, className, children, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(
        className,
        { [styles.p14]: size === 14 },
        { [styles.p16]: size === 16 },
        { [styles.p18]: size === 18 },
      )}
      {...props}>
      {children}
    </p>
  );
};
