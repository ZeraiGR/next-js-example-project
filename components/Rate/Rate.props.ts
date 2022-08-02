import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface RateProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  value: 1 | 2 | 3;
}
