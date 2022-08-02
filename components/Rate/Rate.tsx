import React from 'react';
import cn from 'classnames';

import RateIcon from './icon-rate.svg';
import { RateProps } from './Rate.props';
import styles from './Rate.module.scss';

export const Rate = ({ value = 1, className, ...props }: RateProps): JSX.Element => {
  return (
    <ul className={styles.rate}>
      {new Array(3).fill(<></>).map((r: JSX.Element, i: number) => (
        <li key={i}>
          <RateIcon className={cn(styles.icon, { [styles.filled]: i < value })} />
        </li>
      ))}
    </ul>
  );
};
