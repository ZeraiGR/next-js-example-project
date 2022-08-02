import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppContext } from '../../context/app-context';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import { Search } from '../../components';
import { firstLevelMenu } from '../../utils/template-menu';
import styles from './Menu.module.scss';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);
  const router = useRouter();

  const onChangeSecondMenu = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((item) => {
          if (secondCategory === item._id.secondCategory) {
            item.isOpen = !item.isOpen;
          }
          return item;
        }),
      );
  };

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
            <Link href={`/${m.route}`}>
              <a>{m.name}</a>
            </Link>
          </div>
          <ul className={styles.secondLevelMenu}>
            {m.id === firstCategory && renderSecondLevelMenu(m)}
          </ul>
        </>
      </li>
    ));
  };

  const renderSecondLevelMenu = (firstMenuItem: FirstLevelMenuItem) => {
    return menu.map((item) => {
      const alias = router.query.alias ? router.query.alias.toString() : '';

      if (item.pages.map((p) => p.alias).includes(alias)) {
        item.isOpen = true;
      }

      return (
        <li
          className={cn(styles.secondLevelItem, { [styles.open]: item.isOpen })}
          key={item._id.secondCategory}>
          <>
            <button type="button" onClick={() => onChangeSecondMenu(item._id.secondCategory)}>
              {item._id.secondCategory}
            </button>
            <ul className={styles.thirdLevelMenu}>
              {renderThirdLevelMenu(item, firstMenuItem.route)}
            </ul>
          </>
        </li>
      );
    });
  };

  const renderThirdLevelMenu = (secondMenuItem: MenuItem, route: string) => {
    return secondMenuItem.pages.map((page) => {
      const isActive = `/${route}/${page.alias}` === router.asPath;

      return (
        <li className={cn(styles.thirdLevelItem, { [styles.active]: isActive })} key={page._id}>
          <Link href={`/${route}/${page.alias}`}>
            <a>{page.title}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <Search />
      <ul className={styles.menu}>{renderFirstLevelMenu()}</ul>
    </>
  );
};
