import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';
import LogoIcon from '../logo.svg';

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
  return (
    <Link href="/">
      <a className={cn(styles.link, className)}>
        <LogoIcon className={cn(styles.logoicon)} {...props} />
      </a>
    </Link>
  );
};
