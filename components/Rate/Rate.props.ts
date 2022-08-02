import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RateProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  value: 1 | 2 | 3;
}
