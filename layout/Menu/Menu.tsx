import React from 'react';
import cn from 'classnames';

import { TopCategory } from '../../interfaces/page.interface';
import { AppContext } from '../../context/app-context';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.scss';

import CoursesIcon from './icons/icon-graduate.svg';
import ServicesIcon from './icons/icon-services.svg';
import BooksIcon from './icons/icon-books.svg';
import ProductsIcon from './icons/icon-products.svg';
import { Search } from '../../components';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { id: TopCategory.Courses, route: 'courses', name: 'Курсы', icon: <CoursesIcon /> },
  { id: TopCategory.Services, route: 'services', name: 'Сервисы', icon: <ServicesIcon /> },
  { id: TopCategory.Books, route: 'books', name: 'Книги', icon: <BooksIcon /> },
  { id: TopCategory.Products, route: 'products', name: 'Товары', icon: <ProductsIcon /> },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);

  const renderFirstLevelMenu = () => {
    return firstLevelMenu.map((m) => (
      <li
        className={cn(styles.firstLevelItem, {
          [styles.active]: m.id === firstCategory,
        })}
        key={m.route}>
        <>
          <div className={styles.firstLevelLabel}>
            {m.icon}
            <a href={`/${m.route}`}>{m.name}</a>
          </div>
          <ul className={styles.secondLevelMenu}>
            {m.id === firstCategory && renderSecondLevelMenu(m)}
          </ul>
        </>
      </li>
    ));
  };

  const renderSecondLevelMenu = (firstMenuItem: FirstLevelMenuItem) => {
    return menu.map((item) => (
      <li
        className={cn(styles.secondLevelItem, { [styles.open]: item.isOpen })}
        key={item._id.secondCategory}>
        <>
          <span>{item._id.secondCategory}</span>
          <ul className={styles.thirdLevelMenu}>
            {renderThirdLevelMenu(item, firstMenuItem.route)}
          </ul>
        </>
      </li>
    ));
  };

  const renderThirdLevelMenu = (secondMenuItem: MenuItem, route: string) => {
    return secondMenuItem.pages.map((page) => (
      <li className={cn(styles.thirdLevelItem, { [styles.active]: false })} key={page._id}>
        <a href={`/${route}/${page.alias}`}>{page.title}</a>
      </li>
    ));
  };

  return (
    <>
      <Search />
      <ul className={styles.menu}>{renderFirstLevelMenu()}</ul>
    </>
  );
};
