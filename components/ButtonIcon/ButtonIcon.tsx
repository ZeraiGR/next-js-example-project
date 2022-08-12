import React from 'react';
import cn from 'classnames';

import { ButtonIconProps } from './ButtonIcon.props';
import { icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.scss';

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const Icon = icons[icon];

  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.accent]: appearance === 'primary',
          [styles.white]: appearance === 'white',
        },
        className,
      )}
      type="button"
      {...props}>
      <Icon />
    </button>
  );
};
