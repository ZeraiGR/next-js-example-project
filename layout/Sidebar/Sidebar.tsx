import React from 'react';
import cn from 'classnames';

import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import { Menu } from '../Menu/Menu';
import { Logo } from '../Logo/Logo';

export const Sidebar = ({ className, searchId, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Menu id={searchId} />
    </aside>
  );
};
