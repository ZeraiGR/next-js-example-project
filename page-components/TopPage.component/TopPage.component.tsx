import React from 'react';

import { sortReducer } from '../../components/Sort/sort.reducer';
import { HHdata, Htag, P, Tag } from '../../components';
import { Advantages } from '../../components/Advantages/Advantages';
import { Sort } from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { TopCategory } from '../../interfaces/page.interface';
import { TopPageComponentProps } from './TopPage.component.props';
import styles from './TopPage.component.module.scss';

export const TopPageComponent = ({ firstCategory, products, page }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatch] = React.useReducer(sortReducer, {
    sort: SortEnum.Rating,
    products,
  });

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort });
  };

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
        <Sort sort={sort} setSort={setSort} />
      </div>

      {sortedProducts && (
        <ul className={styles.products}>
          {sortedProducts.map((p) => (
            <li key={p._id}>{p.title}</li>
          ))}
        </ul>
      )}

      {firstCategory === TopCategory.Courses && page.hh && (
        <HHdata
          className={styles.job}
          count={page.hh.count}
          juniorSalary={page.hh.juniorSalary}
          middleSalary={page.hh.middleSalary}
          seniorSalary={page.hh.seniorSalary}
        />
      )}

      {page.advantages && page.advantages.length > 0 && page.advantages[0].title && (
        <Advantages
          className={styles.advantages}
          title="Преимущества"
          advantages={page.advantages}
        />
      )}

      {page.seoText && (
        <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}

      {page.tags && (
        <>
          <Htag className={styles.tagTitle} tag="h2">
            Получаемые навыки
          </Htag>
          <ul className={styles.tags}>
            {page.tags.map((tag) => (
              <li key={tag}>
                <Tag appearance="accent" size="small">
                  {tag}
                </Tag>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
