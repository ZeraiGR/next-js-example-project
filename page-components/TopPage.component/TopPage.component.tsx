import React from 'react';
import { HHdata, Htag, Tag } from '../../components';
import { Sort } from '../../components/Sort/Sort';
import { TopCategory } from '../../interfaces/page.interface';

import styles from './TopPage.component.module.scss';
import { TopPageComponentProps } from './TopPage.component.props';

export const TopPageComponent = ({ firstCategory, products, page }: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          {page.title && <Htag tag="h1">{page.title}</Htag>}
          {products && (
            <Tag size="big" appearance="gray">
              {products.length}
            </Tag>
          )}
        </div>
        <Sort />
      </div>

      {products && (
        <ul>
          {products.map((p) => (
            <li key={p._id}>{p.title}</li>
          ))}
        </ul>
      )}

      {firstCategory === TopCategory.Courses && (
        <HHdata
          count={page.hh.count}
          juniorSalary={page.hh.juniorSalary}
          middleSalary={page.hh.middleSalary}
          seniorSalary={page.hh.seniorSalary}
        />
      )}
    </div>
  );
};
