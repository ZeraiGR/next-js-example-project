import React, { ForwardedRef } from 'react';
import cn from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = React.forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className={styles.field}>
        <input className={cn(className, styles.input)} ref={ref} {...props} />
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    );
  },
);
