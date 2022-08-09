import React from 'react';
import cn from 'classnames';

import { DividerProps } from './Divider.props';
import styles from './Divider.module.scss';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(styles.divider, className)} {...props} />;
};
