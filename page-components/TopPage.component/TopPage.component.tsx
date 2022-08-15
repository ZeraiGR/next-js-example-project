import React from 'react';

import { sortInit, sortReducer } from '../../components/Sort/sort.reducer';
import { HHdata, Htag, Product, Tag } from '../../components';
import { Advantages } from '../../components/Advantages/Advantages';
import { Sort } from '../../components/Sort/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { TopCategory } from '../../interfaces/page.interface';
import { TopPageComponentProps } from './TopPage.component.props';
import styles from './TopPage.component.module.scss';
import { motion, useReducedMotion } from 'framer-motion';
import { declOfNum } from '../../utils/declination-of-numbers';

export const TopPageComponent = ({ firstCategory, products, page }: TopPageComponentProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [{ products: sortedProducts, sort }, dispatch] = React.useReducer(
    sortReducer,
    {
      sort: SortEnum.Rating,
      products,
    },
    sortInit,
  );

  React.useEffect(() => {
    dispatch({ type: 'update', payload: { sort, products } });
  }, [products, sort]);

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          {page.title && <Htag tag="h1">{page.title}</Htag>}
          {products && (
            <Tag
              size="big"
              appearance="gray"
              aria-label={
                products.length + declOfNum(products.length, ['элемент', 'элемента', 'элементов'])
              }>
              {products.length}
            </Tag>
          )}
        </div>
        <Sort sort={sort} setSort={setSort} />
      </div>

      {sortedProducts && (
        <ul className={styles.products}>
          {sortedProducts.map((p) => (
            <motion.li
              key={p._id}
              layout={shouldReduceMotion ? false : true}
              className={styles.product}>
              <Product product={p} />
            </motion.li>
          ))}
        </ul>
      )}

      {firstCategory === TopCategory.Courses && page.hh && (
        <HHdata className={styles.job} data={page.hh} />
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
