import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';

import { P } from '../../components';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <P size={16}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</P>
      <ul className={styles.menu}>
        <li>
          <a href="#">Пользовательское соглашение</a>
        </li>
        <li>
          <a href="#">Политика конфиденциальности</a>
        </li>
      </ul>
    </footer>
  );
};
