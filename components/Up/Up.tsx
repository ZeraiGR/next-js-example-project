import React from 'react';

import styles from './Up.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  React.useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={styles.button}
      onClick={scrollTop}
      animate={controls}
      initial={{ opacity: 0 }}>
      <ButtonIcon appearance="primary" icon="up" aria-label="Наверх" />
    </motion.div>
  );
};
