import React, { ForwardedRef } from 'react';
import cn from 'classnames';

import { TextAreaProps } from './Textarea.props';
import styles from './Textarea.module.scss';

export const Textarea = React.forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    return (
      <div className={cn(styles.field, className)}>
        <textarea
          className={cn(styles.textarea, { [styles.errortextarea]: error })}
          ref={ref}
          {...props}
        />
        {error && (
          <span className={styles.error} role="alert">
            {error.message}
          </span>
        )}
      </div>
    );
  },
);
