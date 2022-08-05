import React from 'react';
import cn from 'classnames';

import { AdvantagesProps } from './Advantages.props';
import { Htag } from '../Htag/Htag';
import styles from './Advantages.module.scss';
import { P } from '../P/P';
import CheckIcon from './icon-check.svg';

export const Advantages = ({ className, title, advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Htag tag="h2" className={styles.headline}>
        {title || 'Преимущества'}
      </Htag>
      <ul className={styles.list}>
        {advantages.map((a) => (
          <li className={styles.item} key={a.title}>
            <Htag tag="h3" className={styles.title}>
              <CheckIcon />
              {a.title}
            </Htag>
            <P className={styles.description} size={18}>
              {a.description}
            </P>
          </li>
        ))}
      </ul>
    </div>
  );
};
