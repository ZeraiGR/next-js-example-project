import React from 'react';
import cn from 'classnames';

import { PanelProps } from './Panel.props';
import styles from './Panel.module.scss';

export const Panel = ({ className, type, children, ...props }: PanelProps): JSX.Element => {
  return (
    <div
      className={cn(styles.panel, className, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
      {...props}>
      {children}
    </div>
  );
};
