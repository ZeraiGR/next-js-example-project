import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppContext } from '../../context/app-context';
import { FirstLevelMenuItem, MenuItem } from '../../interfaces/menu.interface';
import { Search } from '../../components';
import { firstLevelMenu } from '../../utils/template-menu';
import styles from './Menu.module.scss';
import { motion } from 'framer-motion';
import { MenuProps } from './Menu.props';

export const Menu = ({ id }: MenuProps): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);
  const router = useRouter();

  const variants = {
    hidden: {
      marginBottom: 0,
    },
    show: {
      marginBottom: 10,
    },
  };

  const variantsMenuList = {
    hidden: {
      marginTop: 0,
      marginBottom: 0,
    },
    show: {
      marginTop: 3,
      marginBottom: 10,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const variantsChildren = {
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
    },
    show: {
      opacity: 1,
      marginBottom: 10,
      height: 'auto',
    },
  };

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
              <a className={styles.link}>{m.name}</a>
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
        <motion.li
          className={cn(styles.secondLevelItem)}
          key={item._id.secondCategory}
          layout
          variants={variants}
          initial={item.isOpen ? 'show' : 'hidden'}
          animate={item.isOpen ? 'show' : 'hidden'}>
          <>
            <button
              className={styles.link}
              type="button"
              onClick={() => onChangeSecondMenu(item._id.secondCategory)}>
              {item._id.secondCategory}
            </button>
            <motion.ul className={styles.thirdLevelMenu} variants={variantsMenuList}>
              {renderThirdLevelMenu(item, firstMenuItem.route, item.isOpen ?? false)}
            </motion.ul>
          </>
        </motion.li>
      );
    });
  };

  const renderThirdLevelMenu = (secondMenuItem: MenuItem, route: string, isOpen: boolean) => {
    return secondMenuItem.pages.map((page) => {
      const isActive = `/${route}/${page.alias}` === router.asPath;

      return (
        <motion.li
          className={cn(styles.thirdLevelItem, { [styles.active]: isActive })}
          key={page._id}
          variants={variantsChildren}>
          <Link href={`/${route}/${page.alias}`}>
            <a className={styles.link} tabIndex={isOpen ? 0 : -1}>
              {page.title}
            </a>
          </Link>
        </motion.li>
      );
    });
  };

  return (
    <div>
      <Search id={id} />
      <ul className={styles.menu}>{renderFirstLevelMenu()}</ul>
    </div>
  );
};
