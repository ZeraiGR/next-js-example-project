import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';
import LogoIcon from '../logo.svg';

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
  return (
    <Link href="/">
      <a className={styles.link}>
        <LogoIcon className={cn(className, styles.logoIcon)} {...props} />
      </a>
    </Link>
  );
};
