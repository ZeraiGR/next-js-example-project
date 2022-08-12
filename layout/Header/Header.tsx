import React from 'react';
import cn from 'classnames';

import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    setIsOpened(false);
  }, [router]);

  React.useEffect(() => {
    if (isOpened) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [isOpened]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.25,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo className={styles.logo} />
      <ButtonIcon appearance="white" icon="menu" onClick={() => setIsOpened(true)} />
      <motion.div
        className={styles.sidebar}
        variants={variants}
        animate={isOpened ? 'opened' : 'closed'}
        initial={isOpened ? 'opened' : 'closed'}>
        <Sidebar searchId="mobile-search" />
        <ButtonIcon
          className={styles.close}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
