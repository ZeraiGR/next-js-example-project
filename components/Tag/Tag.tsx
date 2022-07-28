import React from 'react';
import cn from 'classnames';

import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';

export const Tag = ({
  size = 'small',
  appearance,
  href,
  className,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(
        styles.tag,
        className,
        { [styles.small]: size === 'small' },
        { [styles.big]: size === 'big' },
        { [styles.ghost]: appearance === 'ghost' },
        { [styles.accent]: appearance === 'accent' },
        { [styles.gray]: appearance === 'gray' },
        { [styles.green]: appearance === 'green' },
        { [styles.red]: appearance === 'red' },
      )}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
