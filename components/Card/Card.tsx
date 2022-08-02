import React from 'react';
import cn from 'classnames';

import { CardProps } from './Card.props';
import styles from './Card.module.scss';

export const Card = ({
  appearance = 'white',
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.card, { [styles.gray]: appearance === 'gray' })}
      {...props}>
      {children}
    </div>
  );
};
