import React, { FunctionComponent } from 'react';

import { AppContext } from '../context/app-context';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function WithLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
