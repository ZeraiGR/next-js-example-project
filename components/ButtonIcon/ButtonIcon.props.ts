import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './icon-up.svg';
import menu from './icon-menu.svg';
import close from './icon-close.svg';

export const icons = {
  up,
  menu,
  close,
};

type Icons = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: Icons;
  appearance: 'primary' | 'white';
}
