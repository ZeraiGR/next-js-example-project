import React from 'react';
import cn from 'classnames';

import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';

export const Htag = ({ tag, children, className, ...props }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(className, styles.h1)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(className, styles.h2)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(className, styles.h3)} {...props}>
          {children}
        </h3>
      );

    default:
      return <></>;
  }
};
