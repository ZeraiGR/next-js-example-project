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
      <div className={cn(styles.field, className)}>
        <input className={cn(styles.input, { [styles.inputError]: error })} ref={ref} {...props} />
        {error && (
          <span className={styles.error} role="alert">
            {error.message}
          </span>
        )}
      </div>
    );
  },
);
