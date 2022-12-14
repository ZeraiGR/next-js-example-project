import React, { FunctionComponent, KeyboardEvent } from 'react';
import cn from 'classnames';

import { AppContextProvider, Icontext } from '../context/app-context';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Up } from '../components';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkFocused, setIsSkipLinkFocused] = React.useState<boolean>(false);

  const contentRef = React.useRef<HTMLDivElement>(null);

  const skipLinkHandler = (key: KeyboardEvent) => {
    if (key.code === 'Enter' || key.code === 'Space') {
      contentRef.current?.focus();
    }

    setIsSkipLinkFocused(false);
  };

  return (
    <div className={styles.layout}>
      <a
        className={cn(styles.skiplink, { [styles.focused]: isSkipLinkFocused })}
        tabIndex={0}
        href="#"
        onFocus={() => setIsSkipLinkFocused(true)}
        onKeyDown={skipLinkHandler}>
        Перейти к контенту
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} searchId="search" />
      <main className={styles.content} ref={contentRef} tabIndex={0} role="main">
        {children}
      </main>
      <Up />
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & Icontext>(
  Component: FunctionComponent<T>,
) => {
  return function WithLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
