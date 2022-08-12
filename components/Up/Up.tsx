import React from 'react';

import styles from './Up.module.scss';
import UpIcon from './icon-up.svg';
import { motion, useAnimationControls } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';

export const Up = (): JSX.Element => {
  const controls = useAnimationControls();
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
    <motion.button
      className={styles.button}
      onClick={scrollTop}
      type="button"
      animate={controls}
      initial={{ opacity: 0 }}>
      <UpIcon />
    </motion.button>
  );
};
