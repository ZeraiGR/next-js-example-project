import React, { ForwardedRef } from 'react';
import cn from 'classnames';

import { CardProps } from './Card.props';
import styles from './Card.module.scss';

export const Card = React.forwardRef(
  (
    { appearance = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div
        className={cn(className, styles.card, { [styles.gray]: appearance === 'gray' })}
        {...props}
        ref={ref}>
        {children}
      </div>
    );
  },
);
