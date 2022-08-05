import React from 'react';
import cn from 'classnames';

import { HHdataProps } from './HHdata.props';
import styles from './HHdata.module.scss';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import { Rate } from '../Rate/Rate';
import { numWithSpaces, priceRu } from '../../utils/format-numbers';

export const HHdata = ({ className, data }: HHdataProps): JSX.Element => {
  const { count, juniorSalary, middleSalary, seniorSalary } = data;

  return (
    <div className={cn(className, styles.data)}>
      <div className={styles.header}>
        <Htag tag="h2">Вакансии - Photoshop</Htag>
        <Tag size="small" appearance="red">
          hh.ru
        </Tag>
      </div>

      <div className={styles.stats}>
        <Card className={styles.stat}>
          <span className={styles.title}>Всего вакансий</span>
          <strong className={styles.value}>{numWithSpaces(count)}</strong>
        </Card>

        <Card>
          <ul className={styles.list}>
            <li>
              <span className={styles.title}>Начальный</span>
              <strong className={styles.salary}>{priceRu(juniorSalary)}</strong>
              <Rate value={1} />
            </li>
            <li>
              <span className={styles.title}>Средний</span>
              <strong className={styles.salary}>{priceRu(middleSalary)}</strong>
              <Rate value={2} />
            </li>
            <li>
              <span className={styles.title}>Профессионал</span>
              <strong className={styles.salary}>{priceRu(seniorSalary)}</strong>
              <Rate value={3} />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
