import React from 'react';
import cn from 'classnames';

import { SuccessProps } from './Success.props';
import styles from './Success.module.scss';

export const Success = ({ className, children, ...props }: SuccessProps): JSX.Element => {
  return (
    <div className={cn(styles.success, className)} {...props}>
      {children}
    </div>
  );
};
